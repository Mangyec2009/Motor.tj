import axios from "axios";
import {create} from "zustand";
let url = "http://localhost:3000/category";
let url1 = "http://localhost:3000/products";

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
            let {data} = await axios.get(`${url1}`);
            set({cat:data});
        } catch (error) {
            console.error(error);
        }
    },
    sortCat: async (id) => {
        try {
            let {data} = await axios.get(`${url1}?categoryId=${id}`);
            set({cat: data});
        } catch (error) {
            console.error(error);
        }
    },
    el: {},
    getById: async (id) => {
        try {
            let {data} = await axios.get(`${url1}/${id}`);
            set({el: data});
        } catch (error) {
            
        }
    },
    search: "",
    setSearch: (value) => set((state) => ({search:value})),
   carts: JSON.parse(localStorage.getItem("cart")) || [],  
    plusCart: (id) => {
        let carts = get().carts;
        let inc = carts.map((oldElem) => {
            if(id == oldElem.id){
                oldElem.cnt++
            }
            return oldElem
        })
        set({carts:inc});
        localStorage.setItem("cart", JSON.stringify(inc));
    },
    minusCart: (id) => {
        const carts = get()
          .carts.map((item) =>
            item.id === id ? { ...item, cnt: item.cnt - 1 } : item
          )
          .filter((item) => item.cnt > 0);
        set({carts});
        localStorage.setItem("cart", JSON.stringify(carts));
    },
    getTotalPrice: () => {
        const carts = get().carts;
        return carts.reduce((total, item) => total + item.cnt * item.price, 0);
    }

}))