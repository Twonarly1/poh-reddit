import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useIsMounted } from "../lib/useIsMounted";
import Account from "./Account";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { LightningBoltIcon } from "@heroicons/react/outline";

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
          className="cursor-pointer gap-1 flex items-center text-sm font-medium rounded-md px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 outline-none"
        >
          <LightningBoltIcon className="h-6 w-6" />
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
