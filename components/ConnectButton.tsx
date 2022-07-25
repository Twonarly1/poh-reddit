import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useIsMounted } from "../lib/useIsMounted";
import Account from "./Account";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export default function Connect() {
  const isMounted = useIsMounted();
  const { isConnected } = useAccount();
  const { connect, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const connector = new MetaMaskConnector();

  if (isConnected) {
    return (
      <button onClick={() => disconnect()}>
        <Account />
      </button>
    );
  }
  return (
    <>
      {connector && isMounted && (
        <button
          onClick={() => connect({ connector })}
          className="cursor-pointer rounded-md px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 text-sm font-medium outline-none"
        >
          Connect
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
}
