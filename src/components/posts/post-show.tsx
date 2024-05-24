import { db } from "@/db";
import { notFound } from "next/navigation";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    return notFound();
  }
  return (
    <div className="m-1">
      <h1 className="text-2xl font-bold my-2">{post.title}</h1>
      <p className="p-5 border  shadow rounded-md">{post.content}</p>
    </div>
  );
}
