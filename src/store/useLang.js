import axios from "axios";
import {create} from "zustand";

export const useLang = create((set, get) => ({
    setLang: (value) => set(state => ({lang:value})),

}))