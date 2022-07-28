import React, { Fragment, useState } from "react";
import Image from "next/image";
import Tabs from "./Tabs";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useIsMounted } from "../lib/useIsMounted";
import pohIcon from "../public/images/proofofhumanity.png";

const Footer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const isMounted = useIsMounted();
  const { isConnected } = useAccount();

  return (
    <>
      <div className=" xs:hidden w-full bg-white shadow-lg">
        <div className="fixed bottom-0 z-50 mx-auto text-gray-500 flex w-screen max-w-5xl items-center justify-between bg-white px-8 py-2">
          <Tabs />
        </div>
      </div>
      <footer className="mx-auto fixed bottom-0 flex w-full max-w-5xl flex-col items-center justify-center space-y-4 bg-slate-200 text-center text-gray-500">
        <div className="cursor-default">
          <span className="cursor-default transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50">
            © {new Date().getFullYear()} poh-tools
          </span>
          {" · "}
          <span>
            <span>Built by </span>
            <a
              className="underline transition duration-500 ease-in-out hover:text-primary-orange hover:text-opacity-50"
              href="https://github.com/Twonarly1"
            >
              Twonarly
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
