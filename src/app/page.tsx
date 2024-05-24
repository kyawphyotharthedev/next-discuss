import PostList from "@/components/posts/post-list";
import PostShow from "@/components/posts/post-show";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className=" grid grid-cols-4 gap-5 p-4">
      <div className=" col-span-3">
        <h2 className=" text-xl font-semibold m-2">Top Posts</h2>
        <PostList fetchData={fetchTopPosts}/>
      </div>
      <div>
        <TopicCreateForm />
        <Divider className="my-2" />
        <div className=" mt-5 border shadow rounded-lg py-5 px-3">
          <TopicList />
        </div>
      </div>
    </div>
  );
}
