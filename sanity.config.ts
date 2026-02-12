import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "portfolio-blog",
  title: "Portfolio Blog",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, // Disable CDN for studio to avoid CORS issues
  plugins: [
    structureTool({
      // Allow all document types to be created
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            ...S.documentTypeListItems().filter(
              (listItem) => !["siteContent", "profile"].includes(listItem.getId()!)
            ),
            // Add singleton documents
            S.listItem()
              .title("Site Content")
              .id("siteContent")
              .child(
                S.document()
                  .schemaType("siteContent")
                  .documentId("siteContent")
              ),
            S.listItem()
              .title("Profile")
              .id("profile")
              .child(
                S.document()
                  .schemaType("profile")
                  .documentId("profile")
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
