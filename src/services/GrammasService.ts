import { axiosInstance } from '../axios';
import { Gramma } from '../types.ts';
import { adaptGramma } from '../adapters/form-adapter.tsx';

export default class GrammasService {
  static async createGramma(gramma: Gramma, companyId: number) {
    return axiosInstance.post('/form/create', adaptGramma(gramma, companyId));
  }

  // static async updateGramma(id: string, gramma: Gramma) {
  //   return axiosInstance.put<Gramma>(`/constructor/${id}`, gramma);
  // }

  static async getGramma(id: string) {
    return axiosInstance.get<Gramma>(`/form/get/${id}`);
  }

  static async deleteGramma(id: string) {
    return axiosInstance.delete<Gramma>(`/form/delete/${id}`);
  }
}
