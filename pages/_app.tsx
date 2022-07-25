import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import apolloClient from "../apollo-client";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import Header from "../components/Header";
import Footer from "../components/Footer";

const { provider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({
      chains: [chain.mainnet],
    }),
  ],

  provider,
});

function MyApp({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={client}>
        <Toaster />
        <Head>
          <title>poh reddit</title>
          <link rel="icon" href="/images/proofofhumanity.png" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </ApolloProvider>
  );
}

export default MyApp;
