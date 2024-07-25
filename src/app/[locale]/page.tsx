"use client";
import BouncingButton from "@/components/common/Buttons/BouncingButton";
import SlideModal from "@/components/common/Popup/SlideIntoModal";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import {
  CloseIcon,
  DecoBottomCenterIcon,
  DecoCornerIcon,
  DecoCornerFillIcon,
  StarIcon,
  DecoCornerSmallIcon,
  DecoBottomCenterSmallIcon,
} from "@/assets/icons/index";
import { ReactNode, useEffect, useState } from "react";
import { UrlObject } from "url";
import TestComponents from "@/components/Test";
import Image from "next/image";
import { RobotImg, LogoImg } from "@/assets/images";
import RotateAnimate from "@/components/common/Transform/Rotate";
import { motion } from "framer-motion";
import HorizontalScroll from "@/components/common/Scroll/HorizontalScroll";

type Menu = {
  name: string | ReactNode;
  path: string | UrlObject;
  prefetch?: boolean;
  chilren?: Menu[];
};
export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslations();
  const menuItems: Menu[] = [
    { name: t("DESCRIPTION"), path: "#description" },
    { name: t("MAP"), path: "/map", prefetch: true },
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
      {/* Header */}
      <header
        id="header"
        className="h-fit mb-2 px-2 md:px-4 flex items-stretch justify-between border-b-[2px] border-primary-color"
      >
        {/* Always display */}
        {/* Chiếm hết độ cao hiện tại */}
        <Link
          href="/"
          className="flex-none flex justify-center items-center w-20 bg-reverse-color text-reverse-color"
        >
          <LogoImg className="min-h-[80px] h-full aspect-[5/4]" />
        </Link>
        {/* Tablet > */}
        <div className="menu hidden md:flex items-center">
          {/* nav link */}
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block px-8 py-8 text-xl font-medium xl:hover:bg-reverse-color xl:hover:text-reverse-color"
              prefetch={item?.prefetch}
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
      {/* Body - Mô tả về trang web */}
      <main id="body" className="h-fit w-full">
        <section
          id="description"
          className="m-3 md:m-6 flex flex-col md:flex-row border-2 border-primary-color border-solid shadow-bottom-left stroke-reverse-color"
        >
          <div className="relative flex-[2] min-h-[300px]">
            {/*         object-fit: contain; */}
            <div className="absolute left-0 right-0 translate-x-0 md:translate-x-[10%] translate-y-[-15%] m-[0_auto] z-10 p-2 h-[500px] w-52 bg-slate-400">
              IMG PROFILE
            </div>
            {/* <RobotIcon /> */}
            <DecoCornerIcon className="absolute hidden 2xl:block top-[-2px] left-[-2px] flip-horizontal" />
            <DecoCornerSmallIcon className="absolute 2xl:hidden top-[-2px] left-[-2px] " />
          </div>
          <div className="relative z-[1000] flex-[2] lg:flex-[3] min-h-[300px] p-7 overflow-hidden border-t-2 border-l-0 border-solid border-primary-color md:border-l-2 md:border-t-0 md:p-16">
            <div className="text-4xl md:text-5xl 2xl:text-6xl font-bold select-none">
              SOME TITLE
            </div>
            <div className="text-4xl md:text-5xl 2xl:text-6xl font-bold select-none">
              TITLE CAPTIONS
            </div>
            <p className="">Descriptions...</p>
            {/* Corner Deco tablet> */}
            <DecoCornerIcon className="absolute hidden 2xl:block top-[-2px] right-[-2px]" />
            <DecoBottomCenterIcon className="absolute hidden 2xl:block bottom-[-2px] right-[50%] translate-x-[50%]" />
            {/* Corner Deco tablet < */}
            <DecoCornerSmallIcon className="absolute 2xl:hidden top-[-2px] right-[-2px] flip-horizontal" />
            <DecoBottomCenterSmallIcon className="absolute 2xl:hidden bottom-[-2px] right-[50%] translate-x-[50%]" />
          </div>
        </section>
        {/* Other */}
        <section
          id="other"
          className="relative m-3 md:m-6 shadow-bottom-left mt-5 border-2 border-solid border-reverse-color bg-reverse-color text-6xl font-bold text-reverse-color flex flex-col justify-center items-center p-7 md:p-16"
        >
          {/* Right deco */}
          <DecoCornerIcon className="absolute hidden 2xl:block top-[-2px] left-[-2px] flip-horizontal" />
          <DecoCornerSmallIcon className="absolute 2xl:hidden top-[-2px] left-[-2px] " />
          {/* Center and text */}
          <RotateAnimate
            className="mb-14"
            duration={0.9}
            rotationDegree={360}
            inViewOptions={{ amount: 0, once: false }}
            scaleOptions={{ scale: 1.5 }}
          >
            <StarIcon />
          </RotateAnimate>
          SOME TEXT
          {/* Left deco */}
          <DecoCornerIcon className="absolute hidden 2xl:block top-[-2px] right-[-2px]" />
          <DecoCornerSmallIcon className="absolute 2xl:hidden top-[-2px] right-[-2px] flip-horizontal" />
        </section>
        {/* vùng Scroll ngang */}
        <section className=" w-full">
          <HorizontalScroll>
            <div className="w-screen h-screen flex-shrink-0 bg-red-500">
              Section 1
            </div>
            <div className="w-screen h-screen flex-shrink-0 bg-blue-500">
              Section 2
            </div>
            <div className="w-screen h-screen flex-shrink-0 bg-green-500">
              Section 3
            </div>
          </HorizontalScroll>
        </section>
      </main>
      {/* Footer */}
      <footer id="footer" className="text-center">
        INSPIRED BY ROBOT GENTLEMAN
      </footer>
    </>
  );
}
