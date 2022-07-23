import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

type Props = {
  seed?: string;
  large?: boolean;
};

const Avatar = ({ seed, large }: Props) => {
  const { address, isConnecting, isDisconnected } = useAccount();

  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;

  return (
    <div
      className={` relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-gray-300 bg-white shadow-md ring-2 ring-white hover:ring-primary-orange ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || address || "placeholder"
        }.svg`}
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
