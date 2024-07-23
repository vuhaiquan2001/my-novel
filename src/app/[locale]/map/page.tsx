"use client";
import React, { use, useEffect, useMemo, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
// Component
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BouncingButton from "@/components/common/Buttons/BouncingButton";
import SlideModal from "@/components/common/Popup/SlideIntoModal";
// assets
// import svgMap from "@/assets/maps/Vigia 2024-07-05-09-07.svg";
import { DefaulMap } from "@/assets/maps";
import { CloseIcon } from "@/assets/icons/index";
import useDebouncedResize from "@/Helpers/Hooks/WindowResize";

function Page() {
  const [layer, setLayer] = useState("default");
  const [openLayer, setOpenLayer] = useState<boolean>(false);
  const router = useRouter();

  const t = useTranslations();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <BouncingButton
        onClick={goBack}
        className="absolute top-4 left-4 z-10 cursor-pointer  p-2 rounded"
      >
        {t("BACK")}
      </BouncingButton>
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        minScale={1}
        maxScale={5}
        wheel={{ smoothStep: 0.002 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => {
          // Hook for reset zoom on resize window
          useDebouncedResize(resetTransform, 0);
          return (
            <>
              <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                <BouncingButton
                  onClick={() => {
                    setOpenLayer(true);
                  }}
                  className="p-2 rounded"
                >
                  {t("LAYER")}
                </BouncingButton>
                <BouncingButton
                  onClick={() => zoomIn()}
                  className=" p-2 rounded"
                >
                  {t("ZOOMIN")}
                </BouncingButton>
                <BouncingButton
                  onClick={() => zoomOut()}
                  className="p-2 rounded"
                >
                  {t("ZOOMOUT")}
                </BouncingButton>
                <BouncingButton
                  onClick={() => resetTransform()}
                  className="p-2 rounded"
                >
                  {t("RESET")}
                </BouncingButton>
              </div>

              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                }}
                contentStyle={{
                  position: "relative",
                  width: "1912px",
                  height: "966px",
                }}
              >
                <DefaulMap />
              </TransformComponent>
            </>
          );
        }}
      </TransformWrapper>
      {/* Modal */}
      <SlideModal
        className="relative p-8 bg-reverse-color text-reverse-color h-[200px] w-screen"
        isOpen={openLayer}
        onClose={() => {
          setOpenLayer(false);
        }}
        duration={0.3}
        direction="bottom"
        position="bottom"
        // transition={{ type: "tween", ease: "linear" }}
      >
        <BouncingButton
          onClick={() => {
            setOpenLayer(false);
          }}
          className="absolute top-2 right-2"
        >
          <CloseIcon />
        </BouncingButton>
        <p>This is the content of the modal.</p>
      </SlideModal>
    </div>
  );
}

export default Page;
