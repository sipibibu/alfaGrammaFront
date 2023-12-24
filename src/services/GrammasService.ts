import { axiosInstance } from "../axios";
import { Gramma } from "../types.ts";
import { adaptGramma } from "../adapters/form-adapter-to-server.tsx";

export default class GrammasService {
  static async createGramma(gramma: Gramma) {
    return axiosInstance.post("/forms/create", adaptGramma(gramma));
  }

  // static async updateGramma(id: string, gramma: Gramma) {
  //   return axiosInstance.put<Gramma>(`/constructor/${id}`, gramma);
  // }

  static async getGramma(id: string) {
    return axiosInstance.get<Gramma>(`/forms/get/${id}`);
  }

  static async deleteGramma(id: string) {
    return axiosInstance.delete<Gramma>(`/forms/delete/${id}`);
  }
}
