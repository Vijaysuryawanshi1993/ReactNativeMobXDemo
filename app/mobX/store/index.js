import { observable, runInAction, decorate } from 'mobx';
import service from "../services"
class store {
    constructor() {
        this.service = new service();
    }

    apidata = {
        model: []
    };

    getAPIdata = async (currentUser) => {
        try {
            var params = {
                accessToken: currentUser,
            };
            const data = await this.service.get(params);

            if (data) {
                console.log(data)
                runInAction(() => {
                    this.apidata = data;
                });
            }

        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };
}
decorate(store, {
    apidata: observable
})


export default new store();