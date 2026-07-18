import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Motif } from "@/components/Motif";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — CAKRA-AI Blog`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date)
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="relative mx-auto max-w-3xl px-6 pt-10 pb-24">
      <Motif
        variant="graduation"
        className="pointer-events-none absolute top-16 -right-16 size-64 text-accent/[0.07] hidden lg:block"
      />
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
      >
        <ArrowLeft className="size-4" />
        Kembali ke Blog
      </Link>

      <div className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-[13px] text-ink-faint">
          <span>{formatDate(post.date)}</span>
          {post.author && (
            <>
              <span>·</span>
              <span>{post.author}</span>
            </>
          )}
        </div>
        <h1 className="font-serif text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
      </div>

      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
