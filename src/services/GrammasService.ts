import { axiosInstance } from "../axios";
import { IGrammaConstructor } from "../types.ts";
import { adaptGramma } from "../adapters/form-adapter-to-server.tsx";
import { GrammaFromServer } from "../adapters/form-adapter-to-client.ts";

export default class GrammasService {
  static async createGramma(gramma: IGrammaConstructor) {
    const adapted = adaptGramma(gramma);
    console.log(adapted);
    return axiosInstance.post("/forms/create", adapted);
  }

  // static async updateGramma(id: number, gramma: Gramma) {
  //   return axiosInstance.put<Gramma>(`/constructor/${id}`, gramma);
  // }

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
}
