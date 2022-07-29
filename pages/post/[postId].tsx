import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Timeago from "react-timeago";
import { useAccount, useEnsName } from "wagmi";
import toast from "react-hot-toast";
import { GET_POST_BY_POST_ID } from "../../graphql/queries";
import { ADD_COMMENT } from "../../graphql/mutations";
import Avatar from "../../components/Avatar";
import Post from "../../components/Post";
import { Comments, Post as Posts } from "../../typings";
import { conciseEthAddress } from "../../lib/utils";

type FormData = {
  comment: string;
};

function PostPage() {
  const router = useRouter();
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_POST_BY_POST_ID, "getPostListByPostId"],
  });
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: router.query.postId },
  });
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: ensData } = useEnsName({
    address: address,
  });
  const post: Posts = data?.getPostListByPostId;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here...
    const notification = toast.loading("Posting your comment...");
    await addComment({
      variables: {
        post_id: router.query.postId,
        username: address,
        text: data.comment,
      },
    });

    setValue("comment", "");
    toast.success("Comment Successfully Posted!", {
      id: notification,
    });
  };

  return (
    <div className="mx-auto px-6 my-7 max-w-5xl">
      <Post post={post} />
      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 ">
        <div className="flex items-center gap-2 text-sm">
          <Avatar seed={address} />
          <span className="mt-4 text-green-800">{ensData || address}</span>
        </div>
        <div className="flex mt-2 items-start space-x-4">
          <div className="min-w-0 flex-1">
            <form
              action="#"
              className="relative"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm outline-none">
                <label htmlFor="comment" className="sr-only">
                  Add your comment
                </label>
                <textarea
                  {...register("comment")}
                  disabled={!address}
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none rounded-md border-b border-gray-200 bg-gray-50 p-2 pl-4 outline-none disabled:bg-gray-50 sm:text-sm"
                  placeholder={
                    address
                      ? "Add your comment..."
                      : "Please sign in to comment"
                  }
                  defaultValue={""}
                />

                {/* Spacer element to match the height of the toolbar */}
                <div className="py-2" aria-hidden="true">
                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                  <div className="py-px">
                    <div className="h-9" />
                  </div>
                </div>
              </div>

              <button
                disabled={!address}
                type="submit"
                className="absolute bottom-2 cursor-pointer right-2 items-center rounded-md border border-transparent bg-purple-200 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* order the comments! */}
      <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />
        {post?.comments.map((comment: Comments) => (
          <div
            className="relative flex items-center space-x-2 space-y-5"
            key={comment.id}
          >
            <hr className="absolute top-10 left-7 z-0 h-16 border" />
            <div className="z-50">
              <Avatar seed={comment.username} />
            </div>
            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <a
                  className="cursor-pointer"
                  href={`https://poh-registry.vercel.app/registry/${post.username}`}
                >
                  <span className="truncate hover:underline">
                    {conciseEthAddress(post.username)}
                  </span>
                </a>
                <span className=" cursor-default px-1">
                  &bull; <Timeago date={comment.created_at} />
                </span>
              </p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
