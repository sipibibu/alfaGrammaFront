import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Store from "./store/store";
import { createContext } from "react";

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context.Provider
    value={{
      store,
    }}
  >
    <App />
  </Context.Provider>,
);
