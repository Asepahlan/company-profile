import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
          {post.category}
        </span>
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  );
}
