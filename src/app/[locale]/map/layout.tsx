import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bản đồ",
  description: "Bản đồ thế giới Avalor",
};

export default async function LayoutMap({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
