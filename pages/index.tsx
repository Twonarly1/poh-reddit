import React from "react";
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { GET_SUBREDDITS_WITH_LIMIT } from "../graphql/queries";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditList";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;

  return (
    <div className="my-7 mx-auto  max-w-5xl px-6">
      <PostBox />
      <div className="flex">
        <Feed />
        <div className="ml-5">
          {" "}
          <div className="sticky top-36 mt-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline">
            <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
            <div>
              {subreddits?.map((subreddit, i) => (
                <SubredditRow
                  key={subreddit.id}
                  topic={subreddit.topic}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
