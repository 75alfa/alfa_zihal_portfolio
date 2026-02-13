import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getBlogPostBySlugUseCase } from "@/src/application/di/container";
import { urlForImage } from "@/src/infrastructure/sanity/image";
import { uiLabels } from "@/src/infrastructure/config/ui-labels";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlugUseCase.execute(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="max-w-4xl mx-auto px-6 pt-8 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-8">
        <Link
          href="/blog"
          className="sketch-button flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} /> {uiLabels.navigation.back}
        </Link>
        <span className="opacity-30">/</span>
        <span className="text-sm font-bold opacity-50 uppercase tracking-widest">
          {post.title}
        </span>
      </div>

      <article className="sketch-card bg-white overflow-hidden">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-black opacity-40 uppercase">
            <Clock size={12} /> {formattedDate}
          </div>
          <h1 className="text-4xl font-black uppercase mb-6 leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg italic opacity-75 mb-8">{post.excerpt}</p>
          )}
          {post.mainImage && (
            <div className="relative w-full aspect-video mb-8 overflow-hidden rounded-sm border-2 border-black">
              <Image
                src={urlForImage(post.mainImage).width(800).height(450).url()}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-black rounded-full text-[9px] font-black uppercase tracking-tighter"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          {post.body && post.body.length > 0 && (
            <div className="prose prose-lg max-w-none sketch-content">
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-4 leading-relaxed">{children}</p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-2xl font-black uppercase mt-8 mb-4">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-xl font-black uppercase mt-6 mb-3">
                        {children}
                      </h3>
                    ),
                  },
                }}
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
