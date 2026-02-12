export const postsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  tags,
  mainImage
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  tags,
  mainImage,
  body
}`;
