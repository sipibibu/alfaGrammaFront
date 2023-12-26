import {makeAutoObservable} from "mobx";
import ProfileService from "../../services/ProfileService.ts";
import UserStore from "../userAuth/userStore.ts";

class ProfileRespondentStore {
    age = "";
    education = "";
    interests = [""];

    setAge(age: string) {
        this.age = age;
    }

    setEducation(education: string) {
        this.education = education;
    }

    setInterests(interests: string[]) {
        this.interests = interests;
    }

    constructor() {
        makeAutoObservable(this)
    }

    async updateAge(age: string) {
        try {
            const response = await ProfileService.updateProfileRespondentAge(age);
            this.setAge(response.data.age);
            console.log(response, this.age);
        } catch (e) {
            console.log(e);
        }
    }

    async updateEducation(education: string) {
        try {
            const response =
                await ProfileService.updateProfileRespondentEducation(education);
            this.setEducation(response.data.education);
            console.log(response, this.education);
        } catch (e) {
            console.log(e);
        }
    }

    async updateInterests(interests: string[]) {
        try {
            const response =
                await ProfileService.updateProfileRespondentInterests(interests);
            this.setInterests(response.data.interests);
            console.log(response, this.interests);
        } catch (e) {
            console.log(e);
        }
    }

    async updateProfile(age: string, education: string, interests: string[]) {
        if (age != UserStore.respondent.additionalData?.age) {
            await this.updateAge(age);
        }
        if (education != UserStore.respondent.additionalData?.education) {
            await this.updateEducation(education);
        }
        if (interests != UserStore.respondent.additionalData?.interests) {
            await this.updateInterests(interests);
        }
        UserStore.setRespondent({
            name: UserStore.respondent.name,
            surname: UserStore.respondent.surname,
            login: UserStore.respondent.login,
            role: UserStore.respondent.role,
            additionalData: {
                age: this.age,
                education: this.education,
                interests: this.interests,
            },
        });
    }
}

export default new ProfileRespondentStore();
