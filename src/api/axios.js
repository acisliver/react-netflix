import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "c9750eef51d60c17ecdb375542254058",
        language: "ko-KR",
    }
})

export default instance;
