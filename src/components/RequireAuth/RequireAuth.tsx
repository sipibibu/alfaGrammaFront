import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const RequireAuth = () => {
  const { store } = useContext(Context);
  const renderByRole = (role: string) => {
    switch (role) {
      case "Respondent":
        return;
    }
  };
  return store.user.role == "Respondent";
};

export default observer(RequireAuth);
