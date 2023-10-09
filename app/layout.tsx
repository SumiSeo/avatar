import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./styles/globals.scss";

// import withApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { GlobalContextProvider } from "./context/store";

// components
import NavBar from "./components/NavBar";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

// creating the Apollo Client
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_APP_URL, // <- Configure GraphQL Server URL (must be absolute)
  cache: new InMemoryCache(),
});
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
