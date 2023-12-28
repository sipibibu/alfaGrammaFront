import { makeAutoObservable } from "mobx";
import { IGramma, IGrammaForm, IGrammaStructure } from "../../types.ts";
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
    console.log(grammasList);
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
      const gramma = await GrammasService.getGramma(id);
      this.setGramma(adaptGramma(gramma));
    } catch (e) {
      console.log(e);
    }
  }

  //
  async getGrammasList() {
    try {
      const grammasList = await GrammasService.getAllGrammas();
      this.setGrammasList(grammasList.map((gramma) => adaptGramma(gramma)));
    } catch (e) {
      console.log(e);
    }
  }

  //
  async getGrammaForm(id: number) {
    try {
      const gramma = await GrammasService.getGrammaForm(id);
      const adapted = adaptGramma(gramma);
      console.log(adapted);
      this.setGrammaForm(adapted);
    } catch (e) {
      console.log(e);
    }
  }
  //
  // async getPlannedGrammasList() {
  //   try {
  //     setTimeout(() => {
  //       this.setGrammasList(MockGrammas);
  //     }, 500);
  //   } catch (e) {}
  // }
  //
  async getCompanysGrammasList() {
    try {
      setTimeout(() => {
        this.setGrammasList(MockGrammas);
      }, 500);
    } catch (e) {}
  }
}

export default new GrammaStore();
