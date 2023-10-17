import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Nunito_Sans } from "next/font/google";
import "./styles/globals.scss";
import { ApolloWrapper } from "./utilities/apollo-wrapper";
import { GlobalContextProvider } from "./context/store";

// components
import Navbar from "./components/Navbar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

// creating the Apollo Client
export const metadata: Metadata = {
  title: "Sumi SEO",
  description:
    "Sumi SEO | Software Engineer | Machine learning | Biomedical Engineering",
};

export default function RootLayout({
  children,
  makeSuspenseCache,
}: {
  children: React.ReactNode;
  makeSuspenseCache: any;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={nunitoSans.className}>
          <Navbar />
          <ApolloWrapper>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </ApolloWrapper>
        </body>
      </UserProvider>
    </html>
  );
}
