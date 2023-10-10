import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./styles/globals.scss";
import { ApolloWrapper } from "./utilities/apollo-wrapper";
import { GlobalContextProvider } from "./context/store";

// components
import NavBar from "./components/NavBar";

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
      <body className={nunitoSans.className}>
        <NavBar />
        <ApolloWrapper>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
