import { Linkedin, Twitter, Dribbble } from "lucide-react";

export function MinimalFooter() {
  return (
    <div className="mt-24 mb-8 border-t-2 border-black border-dashed pt-8 flex flex-col items-center gap-6 opacity-60">
      <div className="text-xl font-black italic tracking-widest uppercase">
        Everything is possible by prayer and UX
      </div>
      <div className="flex gap-8">
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Linkedin size={16} /> LINKEDIN
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Dribbble size={16} /> DRIBBBLE
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-bold hover:underline decoration-2 underline-offset-4"
        >
          <Twitter size={16} /> TWITTER
        </a>
      </div>
    </div>
  );
}
