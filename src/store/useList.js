import axios from "axios";
import {create} from "zustand";

export const useList = create((set, get) => ({
    data: [],

}))