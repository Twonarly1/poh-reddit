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
  ShareIcon,
} from "@heroicons/react/outline";
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
  const { data: ensData } = useEnsName({
    address: post?.username,
  });
  const { data, loading, error } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      post_id: post?.id,
    },
  });

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [GET_ALL_VOTES_BY_POST_ID, "getVotesByPostId"],
  });

  useEffect(() => {
    const votes: Vote[] = data?.getVotesByPostId;
    // Latest vote (as we sorted by newly created first in SQL query)
    // Notes: you could improive this by moving it to the original query
    const vote = votes?.find((vote) => vote.username == address)?.upvote;

    setVote(vote);
  }, [data]);

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
    const displayNumber = votes?.reduce(
      (total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
      0
    );
    if (votes?.length === 0) return 0;

    if (displayNumber === 0) {
      return votes[0]?.upvote ? 1 : -1;
    }

    return displayNumber;
  };

  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );

  return (
    <>
      <div className="flex  cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm ">
        {/* Votes */}
        <div className="xs:flex hidden flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon
            onClick={() => upVote(true)}
            className={`voteButtons hover:text-blue-400 ${
              vote && "text-blue-400"
            }`}
          />
          <p className="text-xs font-bold text-black">{displayVotes(data)}</p>
          <ArrowDownIcon
            onClick={() => upVote(false)}
            className={`voteButtons hover:text-red-400 ${
              vote === false && "text-red-400"
            }`}
          />
        </div>

        <Link href={`/post/${post.id}`}>
          <div className="realtive w-full p-3 pb-1">
            {/* Header */}
            <div className="xs:flex items-center justify-between text-xs text-gray-400">
              <div className="xs:flex items-center xs:space-x-2">
                <Avatar seed={post.subreddit[0]?.topic} />
                <div className="mt-2 xs:mt-0 xs:flex xs:space-x-1">
                  <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                    <span className="font-bold text-black hover:text-primary-orange hover:underline">
                      {post.subreddit[0]?.topic}
                    </span>
                  </Link>
                  <span className="">&bull;</span>
                  <Link href={`/registry/${post.username}`}>
                    <span className="truncate hover:underline">
                      {ensData || conciseEthAddress(post.username)}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex text-xs">
                <TimeAgo date={post.created_at} />
              </div>
            </div>
            {/* Body */}
            <div className="py-4  ">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm font-light">{post.body}</p>
            </div>
            {/* Image */}
            <img className="w-full" src={post.image} alt="" />
            {/* Footer */}
            <div className="flex space-x-4 text-gray-400 ">
              <div className="postButtons">
                <ChatAltIcon className="h-6 w-6" />
                <p className="hidden sm:inline">
                  {post.comments.length} Comments
                </p>
              </div>
              <div className="flex  items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
                <ArrowUpIcon
                  onClick={() => upVote(true)}
                  className={`voteButtons hover:text-blue-400 ${
                    vote && "text-blue-400"
                  }`}
                />
                <p className="text-xs font-bold text-black">
                  {displayVotes(data)}
                </p>
                <ArrowDownIcon
                  onClick={() => upVote(false)}
                  className={`voteButtons hover:text-red-400 ${
                    vote === false && "text-red-400"
                  }`}
                />
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
        </Link>
      </div>
    </>
  );
}

export default Post;
