import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import { chain, createClient, WagmiProvider } from "wagmi";
import apolloClient from "../apollo-client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [apiProvider.fallback()]
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
      <WagmiProvider client={wagmiClient}>
        <RainbowKitProvider
          coolMode={true}
          chains={chains}
          theme={lightTheme({
            accentColor: "#FFAD33",
            accentColorForeground: "white",
            borderRadius: "small",
            fontStack: "system",
          })}
        >
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
      </WagmiProvider>
    </ApolloProvider>
  );
}

export default MyApp;
