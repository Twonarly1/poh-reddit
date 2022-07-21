import { useRouter } from "next/router";
import React, { SVGProps, useEffect, useState } from "react";
import {
  SearchIcon,
  FilterIcon,
  ChatAlt2Icon,
  HomeIcon,
} from "@heroicons/react/outline";
import toast from "react-hot-toast";
import { Tab } from "@headlessui/react";
import Link from "next/link";

type Tab = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  path: string;
};

const navTabs: Tab[] = [
  {
    name: "home",
    Icon: HomeIcon,
    path: "/",
  },
  // {
  //   name: "reddit",
  //   Icon: ChatAlt2Icon,
  // },
  {
    name: "registry",
    Icon: SearchIcon,
    path: "https://poh-tools.vercel.app/",
  },
  //   {
  //     name: 'filter',
  //     Icon: FilterIcon,
  //   },
];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("");

  const handleClick = (tabName: string) => {
    if (tabName == "home") {
      router.push("/");
    } else {
      if (tabName == "registry") {
        router.push(`https://poh-registry.vercel.app/registry`);
      } else {
        router.push(`/${tabName}`);
      }
    }
  };

  useEffect(() => {
    if (router.pathname == "/") setActiveTab("home");
    else {
      setActiveTab(router.pathname.substring(1));
    }
  }, [router.pathname]);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="hidden items-center text-gray-500 sm:inline-flex md:space-x-1">
      {navTabs.map((tab: Tab, index: number) => (
        <a
          key={index}
          onClick={() => handleClick(tab.name || tab.path)}
          className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-none ${
            tab.name == activeTab
              ? "bg-gray-100 text-gray-500  "
              : "bg-white text-gray-500 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center space-x-2">
            <tab.Icon className="h-6 w-6" />
            <p className="hidden md:flex">{capitalizeFirstLetter(tab.name)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Tabs;
