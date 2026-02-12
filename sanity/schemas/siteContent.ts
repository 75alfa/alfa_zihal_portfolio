import { defineField, defineType } from "sanity";

export const siteContentType = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "object",
      fields: [
        defineField({
          name: "headline",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "subheadline",
          type: "text",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "ctaPrimary",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "ctaSecondary",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "experienceBadge",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "methodology",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "steps",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "number",
                  type: "number",
                }),
                defineField({
                  name: "title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  type: "text",
                }),
                defineField({
                  name: "icon",
                  type: "string",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "quote",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "cta",
      type: "object",
      fields: [
        defineField({
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "description",
          type: "text",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "buttonText",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "availabilityText",
          type: "text",
        }),
        defineField({
          name: "rateText",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "navigation",
      type: "object",
      fields: [
        defineField({
          name: "canvasView",
          type: "string",
        }),
        defineField({
          name: "workHistory",
          type: "string",
        }),
        defineField({
          name: "contact",
          type: "string",
        }),
        defineField({
          name: "blog",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "footer",
      type: "object",
      fields: [
        defineField({
          name: "tagline",
          type: "string",
        }),
        defineField({
          name: "linkedinLabel",
          type: "string",
        }),
        defineField({
          name: "dribbbleLabel",
          type: "string",
        }),
        defineField({
          name: "twitterLabel",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "workSectionTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
