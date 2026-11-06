// Industry stories live as Markdown files in src/stories.
// Add a new file with the same frontmatter fields and it appears on Work automatically.

export type Story = {
  slug: string;
  title: string;
  industry: string;
  client: string;
  order: number;
  image?: string;
  problem: string;
  moves: string;
  result: string;
  ai: string;
  Content: any;
};

const modules = import.meta.glob('../stories/*.md', { eager: true }) as Record<string, any>;

export const stories: Story[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const industries = [...new Set(stories.map((s) => s.industry))];
