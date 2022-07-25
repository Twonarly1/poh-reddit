import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SUBREDDITS_WITH_LIMIT } from "../graphql/queries";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditList";
import { Subreddit } from "../typings";

const Home = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });
  const subreddits: Subreddit[] = data?.getSubredditListLimit;
  // console.log(subreddits);
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-6"></div>
        <PostBox />
        <div className="flex">
          <Feed />
          <div className="lg:ml-5">
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
    </>
  );
};

export default Home;
