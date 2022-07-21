import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://ranst.stepzen.net/api/rolling-shrimp/__graphql",
  headers: {
    Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default apolloClient;
