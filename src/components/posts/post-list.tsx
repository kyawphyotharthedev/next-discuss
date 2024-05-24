import { PostWithData } from "@/db/queries/posts";
import Link from "next/link";
import paths from "@/paths";

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>;
}

export default async function PostList({fetchData}:PostListProps) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="border mt-5 rounded-md p-5">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold mb-3">{post.title}</h3>
          <div className="flex flex-row gap-6">
            <p className="text-sm text-gray-500">By {post.user.name}</p>
            <p className="text-sm text-gray-500">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
