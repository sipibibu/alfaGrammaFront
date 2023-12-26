import {axiosInstance} from "../axios";

export default class ProfileService{
    static async updateProfileRespondentAge(age: string){
        return axiosInstance.put("/account/setAge",
            {
                age: age
            },
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async updateProfileRespondentEducation(education: string){
        return axiosInstance.put("/account/setEducation",
            {
                education: education
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }

    static async updateProfileRespondentInterests(interests: string[]){
        return axiosInstance.put("/account/setInterests",
            {
                interests: interests
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }

    static async getAccount(){
        return axiosInstance.get("/account/get",
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }

    static async getCompany(title: string){
        return axiosInstance.get(`/company/${title}`)
    }

    static async updateProfileManagerCompanyName(companyName: string){
        return axiosInstance.put("/company/setTitle", {
            title: companyName
        },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }

    static async updateProfileManagerDescription(description: string){
        return axiosInstance.put("/company/setDescription", {
            description: description
        },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
    }
}
