import { axiosInstance } from "../axios";
import {IGrammaConstructor, IGrammaForm, IInterest, ISubscribingGramma} from "../types.ts";
import { adaptGramma } from "../adapters/form-adapter-to-server.tsx";
import { GrammaFromServer } from "../adapters/form-adapter-to-client.ts";

export default class GrammasService {
  static async createGramma(gramma: IGrammaConstructor) {
    const adapted = adaptGramma(gramma);
    return axiosInstance
      .post("/forms/create", adapted)
      .then((res) => res.data as IGrammaForm);
  }

  static async getGramma(id: number) {
    return axiosInstance
      .get<GrammaFromServer>(`/forms/getShort/${id}`)
      .then((res) => res.data);
  }

  static async getGrammaForm(id: number) {
    return axiosInstance
      .get<GrammaFromServer>(`/forms/get/${id}`)
      .then((res) => res.data);
  }

  static async deleteGramma(id: number) {
    return axiosInstance.delete<GrammaFromServer>(`/forms/delete/${id}`);
  }

  static async getAllGrammas() {
    return axiosInstance
      .get<GrammaFromServer[]>("/forms/getAll")
      .then((res) => res.data);
  }

  static async getAllGrammasByCompany() {
    return axiosInstance
      .get<GrammaFromServer[]>("forms/getCurCompany")
      .then((res) => res.data);
  }

  static async getInterests() {
    return axiosInstance
      .get<IInterest[]>("/interests/")
      .then((res) => res.data);
  }

  static async setInterest(formId: number, interest: IInterest) {
    return axiosInstance
      .put(`/forms/${formId}/addInterest?interestId=${interest.id}`)
      .then((res) => res.data);
  }

  static async subscribeToGramma(formId: number) {
    return axiosInstance
        .put(`/account/subscribe/${formId}`)
        .then((res) => res.status)
  }

  static async unSubscribeToGramma(formId: number) {
    return axiosInstance
        .delete(`/account/subscribe/${formId}`)
        .then((res) => res.status)
  }

  static async getSubscribingGrammas(){
    return axiosInstance
        .get<ISubscribingGramma[]>('/account/subscribe')
        .then((res) => res.data)
  }
}
