import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./styles/globals.scss";
import { GlobalContextProvider } from "./context/store";

// components
import NavBar from "./components/Navbar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumi SEO",
  description:
    "Sumi SEO | Software Engineer | Machine learning | Biomedical Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <NavBar />
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
