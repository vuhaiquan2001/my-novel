import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["vietnamese"] });
const cormorant_garamond = Cormorant_Garamond({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  fallback: ["Serif"],
});
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={cormorant_garamond.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
