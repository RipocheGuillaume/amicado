import { create } from "zustand";
import { combine } from "zustand/middleware";
import { Account } from "./types/account";

const useAccountStore = create(
  combine({ account: undefined as undefined | null | Account }, (set) => ({
    setAccount: (account: Account | null) => set({ account }),
  }))
);

export default useAccountStore;
