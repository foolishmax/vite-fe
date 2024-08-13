import { create } from "zustand";

interface Store {
  username: string;
  age: number;
  onUserNamgeChange: (name: string) => void;
}

export const useStore = create<Store>((set) => ({
  username: "foolishmax",
  age: 18,
  onUserNamgeChange: (name) =>
    set((state) => ({ username: state.username + name })),
}));
