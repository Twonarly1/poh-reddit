import React, { Fragment, useState } from "react";
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
import {
  PaperClipIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/outline";

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
  const { data: accountData, isError, isLoading } = useAccount();
  const { data: ensData } = useEnsName({
    address: accountData?.address,
  });
  const post: Post = data?.getPostListByPostId;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // post comment here...
    console.log(data);

    const notification = toast.loading("Posting your comment...");

    await addComment({
      variables: {
        post_id: router.query.postId,
        username: accountData?.address,
        text: data.comment,
      },
    });

    setValue("comment", "");
    toast.success("Comment Successfully Posted!", {
      id: notification,
    });
  };

  const moods = [
    {
      name: "Excited",
      value: "excited",
      icon: FireIcon,
      iconColor: "text-white",
      bgColor: "bg-red-500",
    },
    {
      name: "Loved",
      value: "loved",
      icon: HeartIcon,
      iconColor: "text-white",
      bgColor: "bg-pink-400",
    },
    {
      name: "Happy",
      value: "happy",
      icon: EmojiHappyIcon,
      iconColor: "text-white",
      bgColor: "bg-green-400",
    },
    {
      name: "Sad",
      value: "sad",
      icon: EmojiSadIcon,
      iconColor: "text-white",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Thumbsy",
      value: "thumbsy",
      icon: ThumbUpIcon,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
    {
      name: "I feel nothing",
      value: null,
      icon: XIcon,
      iconColor: "text-gray-400",
      bgColor: "bg-transparent",
    },
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(moods[5]);

  console.log(data);
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />

      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5  pl-16">
        {/* <p className="text-sm">
          Comment as{' '}
          <span className="text-red-500">
            {ensData || accountData?.address}
          </span>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <textarea
            {...register('comment')}
            disabled={!accountData}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={
              accountData ? 'Add your comment...' : 'Please sign in to comment'
            }
          />
          <button
            disabled={!accountData}
            type="submit"
            className="rounded-full bg-purple-400 p-3 font-semibold text-white disabled:bg-gray-200"
          >
            Comment
          </button>
        </form> */}
        <p className="ml-14 text-sm">
          Comment as{" "}
          <span className="text-red-500">
            {ensData || accountData?.address}
          </span>
        </p>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="z-50">
              <Avatar seed={accountData?.address} />
            </div>
          </div>
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
                  disabled={!accountData}
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none rounded-md border-b border-gray-200 bg-gray-50 p-2 pl-4 outline-none disabled:bg-gray-50 sm:text-sm"
                  placeholder={
                    accountData
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

              <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                    >
                      <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Attach a file</span>
                    </button>
                  </div>
                  <div className="flex items-center">!</div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    disabled={!accountData}
                    type="submit"
                    className="inline-flex  items-center rounded-md border border-transparent bg-purple-200 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* order the comments! */}
      <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />
        {post?.comments.map((comment) => (
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
                <span className="font-semibold text-gray-600">
                  {ensData || comment.username}
                </span>{" "}
                <span className="px-1">&bull;</span>
                <Timeago date={comment.created_at} />
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
