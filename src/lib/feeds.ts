// Feeds are read at build time. The daily rebuild keeps them fresh.
// Any failure returns an empty list, and the matching box on Home stays hidden.
import { XMLParser } from 'fast-xml-parser';
import { site } from '../site.config';

export type Post = { title: string; link: string; date: Date; summary: string };
export type Book = { title: string; author: string; link: string; cover: string };

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: false });

async function fetchXml(url: string) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'rodrigolpborges.com site build' },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    return parser.parse(await res.text());
  } catch {
    return null;
  }
}

const asArray = <T>(x: T | T[] | undefined): T[] => (x === undefined ? [] : Array.isArray(x) ? x : [x]);
const clean = (s: unknown) =>
  String(s ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export async function getPosts(limit = 3): Promise<Post[]> {
  if (!site.substackFeed) return [];
  const xml = await fetchXml(site.substackFeed);
  const items = asArray(xml?.rss?.channel?.item);
  return items.slice(0, limit).map((i: any) => ({
    title: clean(i.title),
    link: String(i.link ?? site.substack),
    date: new Date(i.pubDate),
    summary: clean(i.description).slice(0, 180),
  }));
}

export async function getBooks(limit = 3): Promise<Book[]> {
  if (!site.goodreadsUserId) return [];
  const url = `https://www.goodreads.com/review/list_rss/${site.goodreadsUserId}?shelf=${site.goodreadsShelf}`;
  const xml = await fetchXml(url);
  const items = asArray(xml?.rss?.channel?.item);
  return items.slice(0, limit).map((i: any) => ({
    title: clean(i.title),
    author: clean(i.author_name),
    link: String(i.link ?? ''),
    cover: String(i.book_large_image_url || i.book_medium_image_url || i.book_image_url || ''),
  }));
}
