import { defineField, defineType } from "sanity";

export const workType = defineType({
  name: "work",
  title: "Work Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isEnterprise",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isMobile",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "period",
      type: "string",
    }),
    defineField({
      name: "logoInitials",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
    }),
    defineField({
      name: "overview",
      type: "object",
      fields: [
        defineField({
          name: "goal",
          type: "string",
        }),
        defineField({
          name: "logic",
          type: "string",
        }),
        defineField({
          name: "stat",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
            }),
            defineField({
              name: "desc",
              type: "string",
            }),
            defineField({
              name: "details",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "context",
      type: "text",
    }),
    defineField({
      name: "problem",
      type: "text",
    }),
    defineField({
      name: "solution",
      type: "text",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
