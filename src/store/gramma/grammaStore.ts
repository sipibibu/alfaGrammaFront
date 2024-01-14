import { makeAutoObservable } from "mobx";
import {
  IGramma,
  IGrammaForm,
  IGrammaConstructor,
  IInterest,
} from "../../types.ts";
import GrammasService from "../../services/GrammasService.ts";
import { adaptGramma } from "../../adapters/form-adapter-to-client.ts";
import { toast } from "react-toastify";

class GrammaStore {
  grammaCard = {} as IGramma;
  grammasList = [] as IGramma[];
  subscribingGrammasIds: number[] = [];
  grammaForm: IGrammaForm | null = null;
  interests = [] as IInterest[];

  constructor() {
    makeAutoObservable(this);
  }

  setGramma(gramma: IGramma) {
    this.grammaCard = gramma;
  }

  setGrammasList(grammasList: IGramma[]) {
    this.grammasList = grammasList;
  }

  setSubscribingGrammasIds(subscribingGrammasIds: number[]){
    this.subscribingGrammasIds = subscribingGrammasIds
  }

  setGrammaForm(grammaForm: IGrammaForm) {
    this.grammaForm = grammaForm;
  }

  setInterests(interests: IInterest[]) {
    this.interests = interests;
  }

  async createGramma(gramma: IGrammaConstructor) {
    try {
      const grammaWithId = await GrammasService.createGramma(gramma);
      if (grammaWithId.id && gramma.interest.id !== 0) {
        await GrammasService.setInterest(grammaWithId.id, gramma.interest);
      }
      toast.done(`Опрос '${grammaWithId.title}' успешно создан`);
    } catch (e) {
      toast.error("Не удалось создать опрос. Пожалуйста, повторите позже");
      console.log(e);
    }
  }

  async getGramma(id: number) {
    try {
      const gramma = await GrammasService.getGramma(id);
      this.setGramma(adaptGramma(gramma));
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammasList() {
    try {
      const grammasList = await GrammasService.getAllGrammas();
      this.setGrammasList(grammasList.map((gramma) => adaptGramma(gramma)));
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammasListByCompany() {
    try {
      const grammasList = await GrammasService.getAllGrammasByCompany();
      this.setGrammasList(grammasList.map((gramma) => adaptGramma(gramma)));
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammaForm(id: number) {
    try {
      const gramma = await GrammasService.getGrammaForm(id);
      const adapted = adaptGramma(gramma);
      this.setGrammaForm(adapted);
    } catch (e) {
      console.log(e);
    }
  }

  async getPlannedGrammasList() {
    try {
      const grammasList = await GrammasService.getAllGrammas();
      this.setGrammasList(grammasList.map((gramma) => adaptGramma(gramma)));
    } catch (e) {
      console.log(e);
    }
  }

  async getInterests() {
    try {
      const interests = await GrammasService.getInterests();
      this.setInterests(interests);
    } catch (e) {
      console.log(e);
    }
  }

  async subscribeToGramma(formId: number) {
    try {
      const grammasIds = await GrammasService.subscribeToGramma(formId)
      console.log(grammasIds);
    } catch (e) {
      console.log(e);
    }
  }

  async getSubscribingGrammas() {
    try {
      const grammasIds = await GrammasService.getSubscribingGrammas();
      console.log(grammasIds);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new GrammaStore();
