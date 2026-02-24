import { SiteContent } from "@/src/domain/entities/Content";

interface MinimalFooterProps {
  siteContent?: SiteContent | null;
}

export function MinimalFooter({ siteContent }: MinimalFooterProps) {
  return (
    <div className="mt-24 border-t-2 border-black border-dashed pt-8 pb-12 flex flex-col items-center gap-6 opacity-60">
      <div className="text-xl font-black italic tracking-widest uppercase">
        {siteContent?.footer.tagline || ""}
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {(siteContent?.footer.socialLinks || []).map((link, index) => (
          <a
            key={index}
            target="_blank"
            href={link.url}
            className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function removeProtocolFromUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}