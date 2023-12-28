import UserStore from "./userAuth/userStore.ts";
import ProfileRespondentStore from "./profile/profileRespondentStore.ts";
import GrammaStore from "./gramma/grammaStore.ts";
import ProfileManagerStore from "./profile/profileManagerStore.ts";
import AnswersStore from "./gramma/answersStore.ts";

class RootStore {
  userStore = UserStore;
  profileRespondentStore = ProfileRespondentStore;
  profileManagerStore = ProfileManagerStore;
  grammaStore = GrammaStore;
  answersStore = AnswersStore;
}

export default RootStore;
