import { useList } from "@/store/useList";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ById = () => {
  let lang = localStorage.getItem("lang");
  let { id } = useParams();
  let { el, getById } = useList();

  useEffect(() => {
    getById(id);
  }, []);

  return (
    <div className="flex flex-col items-start lg:items-center border border-gray-200 rounded-lg shadow-lg bg-gray-50 dark:bg-background p-6 lg:p-8 mb-12">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        <img
          src={el.img}
          alt={el.name?.[lang]}
          className="rounded-lg w-[500px] border-[2px] border-black dark:border-card-Primary_outlined h-auto object-cover shadow-md"
        />
      </div>

      <div className="w-full lg:w-2/3 mt-6 lg:mt-0 lg:ml-8 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white  mb-4">
          {el.name?.[lang]}
        </h1>

        <p className="text-gray-600 dark:text-white text-lg lg:text-xl leading-relaxed">
          {el.desc?.[lang] || "Description not available."}
        </p>
        <div className="mt-6">
          <a href="https://t.me/WardenMin">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Get in Click
            </button>
          </a>
        </div>
          {el.price}
      </div>
    </div>
  );
};

export default ById;


// async function getProducts() {
//   try{
//   let {data} = await axios.get("http://localhost:3000/products")
//   get(data)
//   }catch(error) {
//   console.log(error)
//   }
//   }
//   getProducts()
//   // Корзина Таёр кардем
//   if(!localStorage.getItem("cart")){
//   localStorage.setItem("cart", JSON.stringify([]))
//   }
//   const products = document.querySelector(".products")
//   function get(data) {
//   data.forEach((el) => {
//   const productName = document.createElement("p")
//   const btnAddCart = document.createElement("button")
//   btnAddCart.innerHTML = "add to cart"
//   btnAddCart.onclick = () => {
//   let old = JSON.parse(localStorage.getItem("cart"))
//   let check = false
//   old = old.map((oldElem) => {
//   if(el.id == oldElem.id){
//   oldElem.cnt++
//   check = true
//   }
//   return oldElem
//   })
//   console.log(old)
//   if(check) {
//   localStorage.setItem("cart", JSON.stringify(old))
//   }else{
//   localStorage.setItem("cart", JSON.stringify([...old, {...el, cnt : 1}]))
//   }
//   getCart(JSON.parse(localStorage.getItem("cart")))
//   }
//   productName.innerHTML = el.name
//   products.append(productName, btnAddCart)
//   })
//   }
//   const carts = JSON.parse(localStorage.getItem("cart"))
//   const cart = document.querySelector(".cart")
//   function getCart(data) {
//   cart.innerHTML = ""
//   data.forEach((el) => {
//   const productName = document.createElement("p")
//   const cnt = document.createElement("p")
//   cnt.innerHTML = el.cnt
//   productName.innerHTML = el.name
//   cart.append(productName, cnt)
//   })
//   }
//   getCart(carts)
  