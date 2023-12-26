import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Class } from "../types/navbar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function classNames(...classes: Class) {
  return classes.filter(Boolean).join(" ");
}

const genericHamburgerLine = `h-0.5 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

const Navbar: React.FC = () => {
  const currentPage = usePathname();

  const navigation = [
    { name: "Home", href: "/", current: currentPage === "/" },
    {
      name: "Projects",
      href: "/projects",
      current: currentPage === "/projects",
    },
  ];
  return (
    <Disclosure as="nav" className="bg-transparent px-10 fixed top-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="flex flex-col h-12 w-12 rounded justify-center items-center group">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <div
                    className={`${genericHamburgerLine} ${
                      open
                        ? "rotate-45 translate-y-2.5 opacity-100"
                        : "opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      open
                        ? "-rotate-45 -translate-y-2.5 opacity-100"
                        : "opacity-100"
                    }`}
                  />
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
