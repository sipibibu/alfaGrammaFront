import { makeAutoObservable } from "mobx";
import { IQuestionAnswer, IUserResponse } from "../../types.ts";
import AnswersService from "../../services/AnswersService.ts";
import { adaptAnswer } from "../../adapters/answers-adapter-to-server.ts";
import { adaptAnswers } from "../../adapters/form-adapter-to-client.ts";

class AnswersStore {
  grammaAnswers: IUserResponse[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setGrammaAnswers(grammaAnswers: IUserResponse[]) {
    this.grammaAnswers = grammaAnswers;
  }

  async sendAnswers(answer: IQuestionAnswer[], grammaId: number) {
    try {
      await AnswersService.sendAnswer(adaptAnswer(answer, grammaId));
    } catch (e) {
      console.log(e);
    }
  }

  async getGrammaAnswers(grammaId: number) {
    try {
      const answers = await AnswersService.getGrammaAnswers(grammaId);
      this.setGrammaAnswers(adaptAnswers(answers));
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AnswersStore();
