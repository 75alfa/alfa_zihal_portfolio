import { Linkedin, Twitter, Dribbble } from "lucide-react";
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
      <div className="flex gap-8">
        <a
        target="_blank"
          href={siteContent?.footer.linkedinLabel || ""}
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Linkedin size={16} /> {removeProtocolFromUrl(siteContent?.footer.linkedinLabel || "")}
        </a>
        <a
          target="_blank"
          href={siteContent?.footer.dribbbleLabel || ""}
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Dribbble size={16} /> {removeProtocolFromUrl(siteContent?.footer.dribbbleLabel || "")}
        </a>
        <a
          target="_blank"
          href={siteContent?.footer.twitterLabel || ""}
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Twitter size={16} /> {removeProtocolFromUrl(siteContent?.footer.twitterLabel || "")}
        </a>
      </div>
    </div>
  );
}

function removeProtocolFromUrl(url: string) {
  return url.replace(/^https?:\/\//, "");
}