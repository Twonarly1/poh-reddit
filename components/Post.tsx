import React, { useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import Link from "next/link";
import { Jelly } from "@uiball/loaders";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
  GiftIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { ChatAltIcon } from "@heroicons/react/solid";
import { useAccount, useEnsName } from "wagmi";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_VOTES_BY_POST_ID } from "../graphql/queries";
import { ADD_VOTE } from "../graphql/mutations";
import Avatar from "./Avatar";
import { conciseEthAddress } from "../lib/utils";
import { Post, Vote } from "../typings";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  const [vote, setVote] = useState<boolean>();
  const { address } = useAccount();
  // const { data: ensData } = useEnsName({
  //   address: post?.username,
  // });
  const { data, loading, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      post_id: post?.id,
    },
  });

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BY_POST_ID, "getVotesByPostId"],
  });

  // useEffect(() => {
  //   const votes: Vote[] = data?.getVotesByPostId;
  //   // Latest vote (as we sorted by newly created first in SQL query)
  //   // Notes: you could improive this by moving it to the original query
  //   const vote = votes?.find((vote) => vote.username == address)?.upvote;
  //   console.log(
  //     "here:",
  //     votes?.find((vote) => vote.username)
  //   );
  //   setVote(vote);
  // }, [data]);

  const upVote = async (isUpvote: boolean) => {
    if (!address) {
      toast("! You'll need to sign in to vote!");
      return;
    }
    if (vote && isUpvote) return;
    if (vote === false && !isUpvote) return;
    console.log("voting...", isUpvote);
    const {
      data: { insertVote: newVote },
    } = await addVote({
      variables: {
        post_id: post.id,
        username: address,
        upvote: isUpvote,
      },
    });
  };

  const displayVotes = (data: any) => {
    const votes: Vote[] = data?.getVotesByPostId;
    const vote = votes?.find((vote) => vote.username == address)?.upvote;
    // console.log("displayNumber:", displayNumber);
    // console.log("query vote length:", votes?.length);
    // console.log("votes", votes);
    // console.log("vote", vote);
    // console.log("current user:", address);
    if (vote && address != undefined) {
      return (
        <HeartIconFilled
          onClick={() => upVote(false)}
          className="text-red-500 h-6 w-6"
        />
      );
    } else {
      return (
        <button
          onClick={() => upVote(true)}
          // disabled={}
        >
          <HeartIcon className="h-6 text-red-500 w-6" />
        </button>
      );
    }
  };

  const quantityOfLikes: Vote[] = data?.getVotesByPostId;
  const displayNumber = quantityOfLikes?.reduce(
    (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
    0
  );
  // console.log("data:", data);
  // console.log("vote:", vote);

  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );

  return (
    <>
      <div className="flex  cursor-default rounded-md border border-gray-300 bg-white shadow-sm ">
        <div className=" w-full p-3 pb-1 cursor-default">
          <div className="xs:flex items-center justify-between text-xs text-gray-400">
            <div className="xs:flex items-center xs:space-x-2">
              <Avatar seed={post.subreddit[0]?.topic} />
              <div className="mt-2 xs:mt-0 xs:flex xs:space-x-1">
                <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                  <span className="font-bold cursor-pointer text-black hover:text-primary-orange hover:underline">
                    {post.subreddit[0]?.topic}
                  </span>
                </Link>
                <span className="">&bull;</span>
                <a
                  className=""
                  href={`https://poh-registry.vercel.app/registry/${post.username}`}
                >
                  <span className="truncate hover:underline">
                    {conciseEthAddress(post.username)}
                  </span>
                </a>
              </div>
            </div>
            <div className="flex text-xs cursor-default">
              <TimeAgo date={post.created_at} />
            </div>
          </div>
          <div className="p-3">
            <Link href={`/post/${post.id}`}>
              <div className="w-full cursor-pointer border-l rounded-l pl-3">
                <div className="">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="mt-2 text-sm font-light">{post.body}</p>
                </div>
                <img className="w-full" src={post.image} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex space-x-4 ">
            <div className="postButtons">
              <ChatAltIcon className="h-6  text-gray-400 w-6" />
              <p className="hidden sm:inline">
                {post.comments.length} Comments
              </p>
            </div>
            <div className="postButtons">
              <p className="text-md flex items-center gap-1">
                {displayVotes(data)}
                <span> {displayNumber}</span>
              </p>
            </div>

            {/* <div className="postButtons">
                <GiftIcon className="h-6 w-6" />
                <p className="hidden sm:inline">Award</p>
              </div>
              <div className="postButtons">
                <ShareIcon className="h-6 w-6" />
                <p className="hidden sm:inline">Share</p>
              </div>
              <div className="postButtons">
                <BookmarkIcon className="h-6 w-6" />
                <p className="hidden sm:inline">Save</p>
              </div>
              <div className="postButtons">
                <DotsHorizontalIcon className="h-6 w-6" />
                <p className=""></p>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
