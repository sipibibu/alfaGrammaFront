import { makeAutoObservable } from "mobx";
import { IGramma, IGrammaForm, IGrammaConstructor } from "../../types.ts";
import GrammasService from "../../services/GrammasService.ts";
import { adaptGramma } from "../../adapters/form-adapter-to-client.ts";

class GrammaStore {
  grammaCard = {} as IGramma;
  grammasList = [] as IGramma[];
  grammaForm: IGrammaForm | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setGramma(gramma: IGramma) {
    this.grammaCard = gramma;
  }

  setGrammasList(grammasList: IGramma[]) {
    this.grammasList = grammasList;
  }

  setGrammaForm(grammaForm: IGrammaForm) {
    this.grammaForm = grammaForm;
  }

  async createGramma(gramma: IGrammaConstructor) {
    try {
      await GrammasService.createGramma(gramma);
    } catch (e) {
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

  async getGrammaForm(id: number) {
    try {
      const gramma = await GrammasService.getGrammaForm(id);
      const adapted = adaptGramma(gramma);
      this.setGrammaForm(adapted);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new GrammaStore();
