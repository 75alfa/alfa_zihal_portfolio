import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlForImage(source: { asset?: { _ref?: string } } | null | undefined) {
  if (!source) return builder.image("");
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
