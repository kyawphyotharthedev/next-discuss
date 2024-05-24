import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import { Button } from "@nextui-org/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { fetchCommentByPostId } from "@/db/queries/comments";
import { Suspense } from "react";
import Loading from "@/components/common/loading-screen";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-5">
      <Link
        className="underline underline-offset-4 decoration-solid flex items-center"
        href={paths.topicShow(slug)}
      >
        <ChevronLeftIcon className=" size-4" />
        <span>Back to {slug}</span>
      </Link>
      <Suspense fallback={<Loading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <Suspense fallback={<Loading/>}>
        <CommentList postId={postId} />
      </Suspense>
    </div>
  );
}
