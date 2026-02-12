export const workItemsQuery = `*[_type == "work" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
  _id,
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

export const workItemByIdQuery = `*[_type == "work" && _id == $id && !(_id in path("drafts.**"))][0] {
  _id,
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
