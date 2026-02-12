export const workItemsQuery = `*[_type == "work"] | order(_createdAt desc) {
  _id,
  id,
  title,
  type,
  description,
  isEnterprise,
  isMobile,
  period,
  logoInitials,
  coverImage,
  overview,
  projects,
  context,
  problem,
  solution,
  tags
}`;

export const workItemByIdQuery = `*[_type == "work" && id == $id][0] {
  _id,
  id,
  title,
  type,
  description,
  isEnterprise,
  isMobile,
  period,
  logoInitials,
  coverImage,
  overview,
  projects,
  context,
  problem,
  solution,
  tags
}`;
