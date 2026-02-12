export class BlogPost {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly slug: string,
    public readonly publishedAt: string,
    public readonly excerpt: string,
    public readonly tags: string[],
    public readonly mainImage?: {
      asset: { _ref: string };
    },
    public readonly body?: unknown
  ) {}
}
