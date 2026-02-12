import { Linkedin, Twitter, Dribbble } from "lucide-react";
import { SiteContent } from "@/src/domain/entities/Content";

interface MinimalFooterProps {
  siteContent?: SiteContent | null;
}

export function MinimalFooter({ siteContent }: MinimalFooterProps) {
  return (
    <div className="mt-24 border-t-2 border-black border-dashed pt-8 pb-12 flex flex-col items-center gap-6 opacity-60">
      <div className="text-xl font-black italic tracking-widest uppercase">
        {siteContent?.footer.tagline || "Everything is possible by prayer and UX"}
      </div>
      <div className="flex gap-8">
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Linkedin size={16} /> {siteContent?.footer.linkedinLabel || "LINKEDIN"}
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Dribbble size={16} /> {siteContent?.footer.dribbbleLabel || "DRIBBBLE"}
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Twitter size={16} /> {siteContent?.footer.twitterLabel || "TWITTER"}
        </a>
      </div>
    </div>
  );
}
