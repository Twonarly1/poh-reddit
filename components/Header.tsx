import React from "react";
import Image from "next/image";
import Tabs from "./Tabs";
import { useRouter } from "next/router";
import pohIcon from "../public/images/proofofhumanity.png";
import ConnectButton from "./ConnectButton";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full bg-white shadow-lg">
        <div className="sticky top-0 z-50 mx-auto flex w-screen max-w-7xl items-center justify-between bg-white px-8 py-2">
          <div
            onClick={() => router.push("/")}
            className="relative h-12 w-12 flex-shrink-0 cursor-pointer sm:flex"
          >
            <Image
              priority
              placeholder="blur"
              objectFit="contain"
              layout="fill"
              src={pohIcon}
            />
          </div>
          <div className="xs:hidden">
            <ConnectButton />
          </div>

          <div className="hidden xs:flex items-center text-gray-500 sm:inline-flex md:space-x-1">
            <Tabs />
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
