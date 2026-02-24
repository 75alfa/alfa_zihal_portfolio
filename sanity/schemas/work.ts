import { defineField, defineType } from "sanity";

export const workType = defineType({
  name: "work",
  title: "Case Study",
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
      title: "Project Category",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      title: "My Role",
    }),
    defineField({
      name: "tools",
      type: "array",
      title: "Tools Used",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "timeline",
      type: "string",
      title: "Timeline",
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
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "slug",
              type: "slug",
              options: {
                source: "name",
                maxLength: 96,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "desc",
              type: "string",
            }),
            defineField({
              name: "details",
              title: "Rich Details / Documentations",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Number", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "URL",
                        fields: [
                          {
                            title: "URL",
                            name: "href",
                            type: "url",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessibility.",
                    },
                    {
                      name: "caption",
                      type: "string",
                      title: "Caption",
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: "fullDocumentation",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Number", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "URL",
                        fields: [
                          {
                            title: "URL",
                            name: "href",
                            type: "url",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessibility.",
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: "solutionImages",
              type: "array",
              title: "Solution Images (Optional)",
              of: [
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      description: "Important for SEO and accessibility.",
                    },
                    {
                      name: "caption",
                      type: "string",
                      title: "Caption",
                    },
                  ],
                },
              ],
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
