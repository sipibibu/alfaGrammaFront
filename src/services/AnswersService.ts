import { IUserResponse } from "../types.ts";
import { axiosInstance } from "../axios";
import { AnswersFromServer } from "../adapters/form-adapter-to-client.ts";

export default class AnswersService {
  static async sendAnswer(answer: IUserResponse) {
    return axiosInstance.post<IUserResponse>("/forms/answers/create", answer);
  }

  static async getGrammaAnswers(grammaId: number) {
    return axiosInstance
      .get<AnswersFromServer[]>(`/forms/answers/get/${grammaId}`)
      .then((res) => res.data);
  }
}
