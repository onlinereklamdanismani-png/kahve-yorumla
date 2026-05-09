import Link from 'next/link';
import type { BlogPost } from '@/data/blogs';

const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card flex h-full flex-col">
      <div className="flex items-center justify-between text-xs text-kahve-300">
        <span className="chip">{post.category}</span>
        <time dateTime={post.publishedAt}>
          {dateFormatter.format(new Date(post.publishedAt))}
        </time>
      </div>
      <h3 className="heading-serif mt-4 text-xl">
        <Link href={`/blog/${post.slug}/`} className="hover:text-bordo-500">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-kahve-400">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-xs text-kahve-300">
        <span>{post.readingMinutes} dk okuma</span>
        <Link
          href={`/blog/${post.slug}/`}
          className="font-medium text-bordo-500 underline-offset-4 hover:underline"
        >
          Yazıyı oku →
        </Link>
      </div>
    </article>
  );
}
