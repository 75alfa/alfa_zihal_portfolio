export const profileQuery = `*[_type == "profile"][0] {
  profileText,
  skills,
  education,
  contactInfo,
  availability
}`;
