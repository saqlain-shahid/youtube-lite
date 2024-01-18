import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "HI", gl: "IN" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "ce364b49f8msh61e0b389fd52e12p1cb4b7jsn1d2c4a9f63fc",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
