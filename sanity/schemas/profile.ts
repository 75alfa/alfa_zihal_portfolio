import { defineField, defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "profileText",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "category",
              type: "string",
            }),
            defineField({
              name: "items",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "degree",
              type: "string",
            }),
            defineField({
              name: "institution",
              type: "string",
            }),
            defineField({
              name: "year",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "contactInfo",
      type: "object",
      fields: [
        defineField({
          name: "email",
          type: "string",
        }),
        defineField({
          name: "linkedin",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "availability",
      type: "text",
    }),
  ],
});
