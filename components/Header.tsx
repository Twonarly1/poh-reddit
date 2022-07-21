import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SearchIcon,
  FilterIcon,
  ChatAlt2Icon,
  HomeIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Tabs from './Tabs'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="w-full bg-white shadow-lg">
        <div className="sticky top-0 z-50 mx-auto flex w-screen max-w-5xl items-center justify-between bg-white px-8 py-2">
          <div
            onClick={() => router.push('/')}
            className="relative h-12 w-12 flex-shrink-0 cursor-pointer sm:flex"
          >
            <Image
              priority
              objectFit="contain"
              layout="fill"
              src="/images/proofofhumanity.png"
            />
          </div>
          <div className="flex items-center space-x-2 ">
            <MenuIcon
              className="h-6 w-6 cursor-pointer sm:hidden"
              onClick={() => setOpen(true)}
            />
            <Tabs />
            <ConnectButton />
          </div>
        </div>
      </div>

      <Transition.Root appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          open={open}
          onClose={() => setOpen(true)}
        >
          <div
            className="min-h-screen px-4 text-center"
            onClick={() => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Dialog.Panel>
              <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

              <div className="fixed inset-0 mx-auto mt-32  h-fit max-w-sm items-center justify-center bg-white  p-4">
                <div className="">
                  <div className="relative mx-auto h-24 w-24 flex-shrink-0 cursor-pointer text-center sm:flex">
                    <Image
                      priority
                      objectFit="contain"
                      layout="fill"
                      className=""
                      src="/images/proofofhumanity.png"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    ></Dialog.Title>
                    <Link href="/">
                      <div className="icon">
                        <HomeIcon className="header" />
                        <p className="">Home</p>
                      </div>
                    </Link>
                    <Link href="/reddit">
                      <div className="icon">
                        <ChatAlt2Icon className="header" />
                        <p className="hex">Chat</p>
                      </div>
                    </Link>
                    <Link href="/registry">
                      <div className="icon">
                        <SearchIcon className="header" />
                        <p className="">Search Registry</p>
                      </div>
                    </Link>
                    <Link href="/registry/filter">
                      <div className="icon">
                        <FilterIcon className="header" />
                        <p className="">Filter Registry</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black text-white shadow-lg ring-primary-orange hover:bg-primary-orange focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Header
