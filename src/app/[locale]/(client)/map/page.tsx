"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
// Component
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import BouncingButton from "@/components/Buttons/BouncingButton";
// assets
import svgMap from "@/assets/maps/Vigia 2024-07-05-09-07.svg";

function Page() {
  const [layer, setLayer] = useState("default");
  const router = useRouter();

  const t = useTranslations();

  const goBack = () => {
    router.back();
  };
  const image = useMemo(() => {
    switch (layer) {
      case "default":
        return svgMap;
        break;

      default:
        return svgMap;
    }
  }, [layer]);
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
        maxScale={4}
        wheel={{ smoothStep: 0.005 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute bottom-4 left-4 z-10 flex gap-2">
              <BouncingButton onClick={() => {}} className=" p-2 rounded">
                {t("LAYER")}
              </BouncingButton>
              <BouncingButton onClick={() => zoomIn()} className=" p-2 rounded">
                {t("ZOOMIN")}
              </BouncingButton>
              <BouncingButton onClick={() => zoomOut()} className="p-2 rounded">
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
              wrapperStyle={{ width: "100%", height: "100%" }}
              contentStyle={{ width: "100%", height: "100%" }}
            >
              <Image src={image} alt="map" layout="fill" objectFit="contain" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}

export default Page;
