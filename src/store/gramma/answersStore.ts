import { makeAutoObservable } from "mobx";
import { IQuestionAnswer, IUserResponse } from "../../types.ts";
import AnswersService from "../../services/AnswersService.ts";
import { adaptAnswer } from "../../adapters/answers-adapter-to-server.ts";
import { adaptAnswers } from "../../adapters/form-adapter-to-client.ts";
import { toast } from "react-toastify";

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
      toast.done("Ответ на форму успешно отправлен");
    } catch (e) {
      toast.error(
        "Не удалось отправить ответ на опрос. Пожалуйста, повторите позже",
      );
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
