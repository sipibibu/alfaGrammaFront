import UserStore from "./userAuth/userStore.ts";
import ProfileRespondentStore from "./profile/profileRespondentStore.ts";
import GrammaStore from "./gramma/grammaStore.ts";
import ProfileManagerStore from "./profile/profileManagerStore.ts";

class RootStore{
    userStore = UserStore
    profileRespondentStore = ProfileRespondentStore
    profileManagerStore = ProfileManagerStore
    grammaStore = GrammaStore
}

export default RootStore;
