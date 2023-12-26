import {createContext, useContext} from "react";
import RootStore from "./store/rootStore.ts";

export const RootStoreContext = createContext<RootStore>(new RootStore())

export const useStores = () => {
    return useContext(RootStoreContext)
}
