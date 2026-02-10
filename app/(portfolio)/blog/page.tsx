import { ArrowLeft, Clock, FileText, Plus } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {"Back"}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          My Writings
        </span>
      </div>

      <section className="relative">
        <div className="absolute -top-12 left-0 bg-yellow-100 border-2 border-black p-2 px-6 rotate-[1.5deg] font-bold shadow-sm z-10">
          {"MY WRITTINGS"}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="sketch-card bg-white p-6 hover:rotate-1 hover:translate-y-[-2px] transition-transform group"
            >
              <div className="flex items-center gap-2 mb-4 text-[10px] font-black opacity-40 uppercase">
                <Clock size={12} /> {post.date}
              </div>
              <h4 className="text-xl font-black uppercase mb-3 leading-tight underline decoration-2 decoration-transparent group-hover:decoration-black transition-[text-decoration-color]">
                {post.title}
              </h4>
              <p className="text-sm opacity-75 mb-6 italic leading-relaxed">
                {`"${post.excerpt}"`}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-black rounded-full text-[9px] font-black uppercase tracking-tighter"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-black border-dashed">
                <button className="text-[10px] font-black uppercase flex items-center gap-1">
                  Read Script <FileText size={12} />
                </button>
                <Plus size={14} className="opacity-20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
