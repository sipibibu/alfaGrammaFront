import { IUserResponse } from "../types.ts";
import { axiosInstance } from "../axios";
import { adaptAnswer } from "../adapters/answers-to-server-adapter.ts";

export default class AnswersService {
  static async sendAnswer(answer: IUserResponse) {
    return axiosInstance.post<IUserResponse>(
      "/forms/answers/create",
      adaptAnswer(answer),
    );
  }

  static async getGrammaAnswers(grammaId: number) {
    return axiosInstance
      .get<IUserResponse[]>(`/forms/answers/get/${grammaId}`)
      .then((res) => res.data);
  }
}
