// Industry stories live as Markdown files in src/stories.
// Add a new file with the same frontmatter fields and it appears on Work automatically.

export type Story = {
  slug: string;
  title: string;
  industry: string;
  tags: string[];
  client: string;
  order: number;
  image?: string;
  video?: string;
  linksKey?: string;
  extraTags?: string[];
  problem: string;
  moves: string;
  result: string;
  ai: string;
  Content: any;
};

// A story's primary industry (shown as its badge) can imply it also belongs
// to another industry's filter, without changing what's displayed.
const impliedTags: Record<string, string[]> = {
  Energy: ['Tech'],
  Hospitality: ['Tech'],
  Retail: ['Advertising'],
};

const modules = import.meta.glob('../stories/*.md', { eager: true }) as Record<string, any>;

export const stories: Story[] = Object.entries(modules)
  .map(([path, mod]) => {
    const frontmatter = mod.frontmatter;
    return {
      slug: path.split('/').pop()!.replace(/\.md$/, ''),
      ...frontmatter,
      tags: [...new Set([
        frontmatter.industry,
        ...(impliedTags[frontmatter.industry] ?? []),
        ...(frontmatter.extraTags ?? []),
      ])],
      Content: mod.Content,
    };
  })
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const industries = [...new Set(stories.flatMap((s) => s.tags))];
