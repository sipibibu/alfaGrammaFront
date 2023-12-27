import { makeAutoObservable } from "mobx";
import { IGrammaForm, IGrammaStructure } from "../../types.ts";
import GrammasService from "../../services/GrammasService.ts";
import { MockGrammas } from "../../mock/mock-grammas.ts";

class GrammaStore {
  grammaCard = {} as IGrammaForm;
  grammasList = [] as IGrammaForm[];
  grammaForm: IGrammaForm | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setGramma(gramma: IGrammaForm) {
    this.grammaCard = gramma;
  }

  setGrammasList(grammasList: IGrammaForm[]) {
    this.grammasList = grammasList;
  }

  setGrammaForm(grammaForm: IGrammaForm) {
    this.grammaForm = grammaForm;
  }

  async createGramma(gramma: IGrammaStructure) {
    try {
      await GrammasService.createGramma(gramma);
    } catch (e) {
      console.log(e);
    }
  }

  async getGramma(id: number) {
    try {
      const gramma = MockGrammas.find((gramma) => gramma.id === id);
      if (gramma) {
        this.setGramma(gramma);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammasList() {
    try {
      setTimeout(() => {
        this.setGrammasList(MockGrammas);
      }, 500);
    } catch (e) {}
  }

  async getGrammasForm(id: number) {
    try {
      setTimeout(() => {
        const gramma = MockGrammas.find((gramma) => gramma.id === id);
        if (gramma) {
          this.setGrammaForm(gramma);
        }
      }, 500);
    } catch (e) {}
  }
}

export default new GrammaStore();
