import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import apolloClient from "../apollo-client";
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
  defaultChains,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps: { pageProps } }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          {" "}
          <Toaster />
          <Head>
            <title>poh reddit</title>
            <link rel="icon" href="/images/proofofhumanity.png" />
          </Head>
          <div className="h-screen overflow-y-scroll bg-slate-200">
            <Header />
            <Component {...pageProps} />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>{" "}
    </ApolloProvider>
  );
}

export default MyApp;
