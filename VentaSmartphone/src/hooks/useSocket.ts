import { useEffect } from "react";
import { io } from "socket.io-client";
import useSocketStore from "../store/socketStore";

const useSocket = () => {
  const connect = useSocketStore((state) => state.connect);
  const socket = useSocketStore((state) => state.socket);
  useEffect(() => {
    const sc = io(import.meta.env.VITE_SERVER_URL);
    console.log("newSocket");
    connect(sc);
    function cleanup() {
      sc.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);
  return socket;
};
export default useSocket;
