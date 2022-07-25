import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import Avatar from "../../components/Avatar";
import Feed from "../../components/Feed";
import Engagement from "../../components/Engagement";
import PostBox from "../../components/PostBox";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../../graphql/queries";
import { Post } from "../../typings";

function Subreddit() {
  const {
    query: { topic },
  } = useRouter();

  const { data: postData, error } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      });

  const posts: Post[] = !topic
    ? postData?.getPostList
    : postData?.getPostListByTopic;

  return (
    <div className={`h-24 bg-primary-orange p-8`}>
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            <Avatar seed={topic as string} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold uppercase">{topic}</h1>
            <p className="text-sm text-gray-400">{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-5xl pb-10">
        <PostBox subreddit={topic as string} />
        <div className="flex">
          <Feed topic={topic as string} />
          <div className="sticky top-36 mt-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline">
            <p className="text-md mb-1 p-4 pb-3 font-bold">Engagement</p>
            <div>
              {posts?.map((post, i) => (
                <Engagement key={post.id} username={post.username} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subreddit;
