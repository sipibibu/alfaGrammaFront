import { makeAutoObservable } from "mobx";
import { IUserResponse } from "../../types.ts";
import AnswersService from "../../services/AnswersService.ts";

class AnswersStore {
  grammaAnswers: IUserResponse[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setGrammaAnswers(grammaAnswers: IUserResponse[]) {
    this.grammaAnswers = grammaAnswers;
  }

  async sendAnswers(answer: IUserResponse) {
    try {
      await AnswersService.sendAnswer(answer);
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammaAnswers(grammaId: number) {
    try {
      const answers = await AnswersService.getGrammaAnswers(grammaId);
      this.setGrammaAnswers(answers);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AnswersStore();
