import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import { Motif } from "@/components/Motif";
import { PageHeader } from "@/components/content/PageHeader";
import { getAllPosts } from "@/lib/blog";
import { REPO_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — CAKRA-AI",
  description: "Cerita, catatan pengembangan, dan tips seputar pemakaian CAKRA-AI di kelas.",
};

function formatDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date)
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative mx-auto max-w-3xl px-6 pt-10 pb-24">
      <Motif
        variant="graduation"
        className="pointer-events-none absolute top-16 -right-16 size-64 text-accent/[0.07] hidden lg:block"
      />
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Cerita dari <span className="italic text-accent">sekolah.</span>
          </>
        }
        subtitle="Tulisan, catatan pengembangan, dan tips seputar pemakaian CAKRA-AI di kelas."
      />

      {posts.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-line px-6 py-16 text-center">
          <MessageSquareQuote className="size-8 text-ink-faint" strokeWidth={1.5} />
          <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
            Belum ada tulisan yang ditambahkan. Cerita dan catatan pengembangan CAKRA-AI akan
            muncul di sini.
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] font-medium text-accent-ink hover:underline"
          >
            Ingin berbagi pengalaman? Hubungi lewat GitHub
          </a>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(27,23,18,0.35)]"
            >
              <div className="mb-2 flex items-center gap-2 text-[12.5px] text-ink-faint">
                <span>{formatDate(post.date)}</span>
                {post.author && (
                  <>
                    <span>·</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
              <h2 className="font-serif text-xl font-semibold text-ink">{post.title}</h2>
              {post.excerpt && (
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{post.excerpt}</p>
              )}
              <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-ink">
                Baca selengkapnya
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
