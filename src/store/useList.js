import axios from "axios";
import {create} from "zustand";
let url = "http://localhost:3000/category";
// let url1 = "http://localhost:3000/category";

export const useList = create((set, get) => ({
    data: [],
    getUsers: async () => {
        try {
            let {data} = await axios.get(url);
            set({data:data});
        } catch (error) {
            console.error(error);
        }
    },
    setLang: (lang) => {
        localStorage.setItem("lang", lang)
        get().getUsers()
    },
    cat: [],
    getCat: async () => {
        try {
            
        } catch (error) {
            
        }
    }    

}))