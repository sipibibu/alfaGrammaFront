import { useStores } from "../../rootStoreContext.ts";
import { Role } from "../../const.ts";
import { Navigate, Outlet } from "react-router";
import { observer } from "mobx-react-lite";

type PrivateRouteProps = {
  role: Role;
};

function PrivateRoute({ role }: PrivateRouteProps) {
  const { userStore } = useStores();
  if (userStore.role === Role.None) {
    return <Outlet />;
  }
  return userStore.role !== role ? <Navigate to={"/login"} /> : <Outlet />;
}

export default observer(PrivateRoute);
