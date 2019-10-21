import axios from 'axios';
const webApiUrl = "https://drive.google.com/drive/u/1/folders/159Hwm6c1H0NNyl0DEuas5ZW0itZ3dQXR";

class service {
    get = async (urlParams) => {
        const apiObjAxios = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${urlParams.accessToken}`,
            },
            url: webApiUrl
        }

        let response = await axios(apiObjAxios)//.then(response => {
        return response.data;

    }
}

export default service;