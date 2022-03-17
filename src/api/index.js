import axios from "axios";
const instanceAxios = axios.create({
  baseURL: "http://universities.hipolabs.com/",
});
export const GetDatabooks = async (university, country) => {
  try {
    const res = await instanceAxios.get(
      `name=${university}&country=${country}`
    );
    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const GetCategory = async (country = "uzbekistan") => {
  try {
    // http://universities.hipolabs.com/search?country=uzbekistan
    const res = await instanceAxios.get(`search?country=${country}`);

    console.log(res.data);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
