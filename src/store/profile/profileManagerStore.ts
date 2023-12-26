import {makeAutoObservable} from "mobx";
import ProfileService from "../../services/ProfileService.ts";
import UserStore from "../userAuth/userStore.ts";

class ProfileManagerStore{
    companyName = ''
    description = ''

    constructor() {
        makeAutoObservable(this)
    }

    setCompanyName(name: string){
        this.companyName = name
    }

    setDescription(description: string){
        this.description = description
    }

    async updateCompanyName(companyName: string){
        try {
            const response =
                await ProfileService.updateProfileManagerCompanyName(companyName)
            this.setCompanyName(response.data.name)
            console.log(response, this.companyName);
        } catch (e){
            console.log(e)
        }
    }

    async updateDescription(description: string){
        try {
            const response =
                await ProfileService.updateProfileManagerDescription(description)
            this.setDescription(response.data.description)
            console.log(response, this.description);
        } catch (e){
            console.log(e)
        }
    }

    async updateProfile(companyName: string, description: string) {
        if (companyName != UserStore.manager.additionalData?.companyName) {
            await this.updateCompanyName(companyName);
        }
        if (description != UserStore.manager.additionalData?.description) {
            await this.updateDescription(description);
        }
        UserStore.setManager({
            name: UserStore.manager.name,
            surname: UserStore.manager.surname,
            login: UserStore.manager.login,
            role: UserStore.manager.role,
            additionalData: {
                companyName: this.companyName,
                description: this.description,
            },
        });
    }

}

export default new ProfileManagerStore();
