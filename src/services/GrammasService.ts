import { axiosInstance } from "../axios";
import { IGrammaForm, IGrammaStructure } from "../types.ts";
import { adaptGramma } from "../adapters/form-adapter-to-server.tsx";

export default class GrammasService {
  static async createGramma(gramma: IGrammaStructure) {
    return axiosInstance.post("/forms/create", adaptGramma(gramma));
  }

  // static async updateGramma(id: number, gramma: Gramma) {
  //   return axiosInstance.put<Gramma>(`/constructor/${id}`, gramma);
  // }

  static async getGramma(id: number) {
    return axiosInstance
      .get<IGrammaForm>(`/forms/get/${id}`)
      .then((res) => res.data);
  }

  static async deleteGramma(id: number) {
    return axiosInstance.delete<IGrammaStructure>(`/forms/delete/${id}`);
  }

  static async getAllGrammas() {
    return axiosInstance
      .get<IGrammaForm[]>("forms/getAll")
      .then((res) => res.data);
  }
}
