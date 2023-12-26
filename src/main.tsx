import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RootStoreContext } from "./rootStoreContext.ts";
import RootStore from "./store/rootStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootStoreContext.Provider value={new RootStore()}>
    <App />
  </RootStoreContext.Provider>
);
