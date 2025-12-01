import { blogPosts } from "@/constants/blogPosts";
import Image from "next/image";
import Link from "next/link";
const Blogs = () => {
    return (
          <div className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Latest From Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">By {post.author} • {post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <span className="text-blue-600 hover:underline">Read More →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Blogs;