// The Substack feed is read at build time. The daily rebuild keeps it fresh.
// Any failure returns an empty list, and the matching box on Home stays
// hidden.
import { XMLParser } from 'fast-xml-parser';
import { site } from '../site.config';

export type Post = { title: string; link: string; date: Date; summary: string; image: string; readMins: number };

const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: false });
const UA = 'rodrigolpborges.com site build';

async function fetchXml(url: string) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    return parser.parse(await res.text());
  } catch {
    return null;
  }
}

const asArray = <T>(x: T | T[] | undefined): T[] => (x === undefined ? [] : Array.isArray(x) ? x : [x]);

const decodeEntities = (s: string) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rdquo;/g, '”')
    .replace(/&ldquo;/g, '“')
    .replace(/&hellip;/g, '…')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&nbsp;/g, ' ');

const clean = (s: unknown) =>
  decodeEntities(
    String(s ?? '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );

// Cuts at a word boundary near `max` chars rather than mid-word, and only
// adds an ellipsis when text was actually cut.
function excerpt(text: string, max = 220) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

// The first full paragraph of a post's HTML, as plain text. Falls back to
// the whole body (e.g. for posts with no <p> tags) if none is found. The
// lookahead on <p> keeps this from also matching tags like <picture>.
function firstParagraph(html: string) {
  const p = html.match(/<p(?:\s[^>]*)?>(.*?)<\/p>/s);
  return clean(p ? p[1] : html);
}

export async function getPosts(limit = 3): Promise<Post[]> {
  if (!site.substackFeed) return [];
  const xml = await fetchXml(site.substackFeed);
  const items = asArray(xml?.rss?.channel?.item);
  return items.slice(0, limit).map((i: any) => {
    const body = String(i['content:encoded'] ?? i.description ?? '');
    const words = clean(body).split(' ').filter(Boolean).length;
    const img = body.match(/<img[^>]+src="([^"]+)"/);
    return {
      title: clean(i.title),
      link: String(i.link ?? site.substack),
      date: new Date(i.pubDate),
      summary: excerpt(firstParagraph(body)),
      image: img ? img[1] : '',
      readMins: Math.max(1, Math.round(words / 200)),
    };
  });
}
