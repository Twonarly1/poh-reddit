import React from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import Link from "next/link";
import { useEnsName } from "wagmi";
import { conciseEthAddress } from "../lib/utils";

type Props = {
  username: string;
  index: number;
};

function Engagement({ index, username }: Props) {
  const { data: ensData } = useEnsName({
    address: username,
  });
  return (
    <div className="flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b">
      <p>{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
      <Avatar seed={username} />
      <p className="flex-1 truncate px-4">
        {ensData || conciseEthAddress(username)}
      </p>
      <Link href={`/registry/${username}`}>
        <div className="cursor-pointer rounded-full bg-primary-orange px-3 text-white">
          View
        </div>
      </Link>
    </div>
  );
}

export default Engagement;
