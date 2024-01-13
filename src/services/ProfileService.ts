import { axiosInstance } from "../axios";

export default class ProfileService {
  static async updateProfileRespondentAge(age: string) {
    return axiosInstance.put(
      "/account/setAge",
      {
        age: age,
      }
    );
  }

  static async updateProfileRespondentEducation(education: string) {
    return axiosInstance.put(
      "/account/setEducation",
      {
        education: education,
      }
    );
  }

  static async updateProfileRespondentInterests(interests: string[]) {
    return axiosInstance.put(
      "/account/setInterests",
      {
        interests: interests,
      }
    );
  }

  static async getAccount() {
    return axiosInstance
      .get("/account/get")
      .then((res) => res.data);
  }

  static async getCompany(title: string) {
    return axiosInstance
        .get(`/company/${title}`)
        .then((res) => res.data);
  }

  static async updateProfileManagerCompanyName(companyName: string) {
    return axiosInstance.put(
      "/company/setTitle",
      {
        title: companyName,
      }
    );
  }

  static async updateProfileManagerDescription(description: string) {
    return axiosInstance.put(
      "/company/setDescription",
      {
        description: description,
      }
    );
  }
}
