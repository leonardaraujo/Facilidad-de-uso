import { create } from "zustand";
import { Socket } from "socket.io-client";
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
  newOrderSeller: () => void;
}

interface SocketStoreInterface {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
  socketState: boolean | undefined;
  connect: (socket: Socket<ServerToClientEvents, ClientToServerEvents>) => void;
  disconnect: () => void;
}

const useSocketStore = create<SocketStoreInterface>((set) => ({
  socket: undefined,
  socketState: false,
  connect: (socket) =>
    set(() => ({
      socket: socket,
      socketState: true,
    })),
  disconnect: () =>
    set(() => ({
      socket: undefined,
      socketState: false,
    })),
}));
export default useSocketStore;
