import {axiosInstance} from "../axios";

export default class ProfileService{
    static async updateProfileRespondentAge(age: string){
        return axiosInstance.put("/account/setAge",
            {
                age: age
            },
        {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }
        )
    }

    static async updateProfileRespondentEducation(education: string){
        return axiosInstance.put("/account/setEducation", {
            education: education
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            )
    }

    static async updateProfileRespondentInterests(interests: string[]){
        return axiosInstance.put("/account/setInterests", {
            interests: interests
        },
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
    }

    static async getAccount(){
        return axiosInstance.get("/account/get", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    static async updateProfileManagerAge(age: number){
        return axiosInstance.put("/account/setAge", {
            age: age
        })
    }

    static async updateProfileManagerEducation(age: number){
        return axiosInstance.put("/account/setAge", {
            age: age
        })
    }

    static async updateProfileManagerInterests(age: number){
        return axiosInstance.put("/account/setAge", {
            age: age
        })
    }
}
