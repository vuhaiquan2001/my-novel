"use client";

import BouncingButton from "@/components/common/Buttons/BouncingButton";
import SlideModal from "@/components/common/Popup/SlideIntoModal";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { CloseIcon } from "@/assets/icons/index";
import { ReactNode, useEffect, useState } from "react";
import { UrlObject } from "url";

type Menu = {
  name: string | ReactNode;
  path: string | UrlObject;
  chilren?: Menu[];
};
export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations();
  const menuItems: Menu[] = [
    { name: t("DESCRIPTION"), path: "#description" },
    { name: t("MAP"), path: "/map" },
  ];
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // console.log(prefersDarkScheme);
    return () => {};
  }, []);

  return (
    <>
      <header
        id="header"
        className="h-fit px-2 md:px-4 flex justify-between border-b-[2px] border-primary-color"
      >
        {/* Always display */}
        <Link
          href="/"
          className="flex justify-center items-center h-full w-20 hover:bg-reverse-color hover:text-reverse-color"
        >
          LOGO
        </Link>
        {/* Tablet > */}
        <div className="menu hidden md:flex items-center">
          {/* nav link */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-8 py-8 text-xl font-medium xl:hover:bg-reverse-color xl:hover:text-reverse-color"
            >
              {item.name}
            </Link>
          ))}
          {/* options */}
          <div
            onClick={() => setOpen(true)}
            className="block px-8 py-8 text-xl font-medium xl:hover:bg-reverse-color xl:hover:text-reverse-color"
          >
            Language
          </div>
          <div className="block px-8 py-8 text-xl font-medium xl:hover:bg-reverse-color xl:hover:text-reverse-color">
            Mode
          </div>
          <div className="block px-8 py-8 text-xl font-medium xl:hover:bg-reverse-color xl:hover:text-reverse-color">
            Sound
          </div>
        </div>

        {/* Tablet < (mobile) */}
        <div className="m-menu flex items-center md:hidden">
          Menu Items mobile
        </div>
        {/*  */}
        <SlideModal
          className="relative p-8 bg-reverse-color text-reverse-color h-screen w-screen"
          isOpen={open}
          onClose={() => {
            setOpen(false);
          }}
          duration={0.3}
          fadeDuration={0.3}
          direction="left"
          position="left"
          // transition={{ type: "tween", ease: "linear" }}
        >
          <BouncingButton
            onClick={() => {
              setOpen(false);
            }}
            className="absolute top-2 right-2"
          >
            <CloseIcon />
          </BouncingButton>
          <p>This is the content of the modal.</p>
        </SlideModal>
      </header>
      {/* Description - Mô tả về trang web */}
      <main id="body">
        <section id="description" className="">
          Mô tả
        </section>
        {/*  */}
        <section id="other" className=""></section>
      </main>
      <footer id="footer" className=""></footer>
    </>
  );
}
