import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useList } from "@/store/useList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const AllProducts = () => {
  let {t} = useTranslation();
  const { search, setSearch, data, getUsers, sortCat } = useList();
  const [activeTab, setActiveTab] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2700);
  const lang = localStorage.getItem("lang");
  const { cat, getCat } = useList();

  useEffect(() => {
    getCat();
    getUsers();
  }, []);

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const addToCart = (product) => {
    let oldCart = JSON.parse(localStorage.getItem("cart"));
    let found = false;

    oldCart = oldCart.map((item) => {
      if (item.id === product.id) {
        item.cnt++;
        found = true;
      }
      return item;
    });

    if (!found) {
      oldCart.push({ ...product, cnt: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(oldCart));
    toast.success(t('Example.tst'));
  };

  return (
    <div>
      <ToastContainer />
      {/* Category Tabs */}
      <div className="w-full flex px-4 gap-4 my-6 items-center justify-start overflow-x-auto">
        <div
          className={`p-2 rounded-lg cursor-pointer transition ${
            activeTab === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => {
            setActiveTab(0);
            getCat();
          }}
        >
          <p className="text-md">All</p>
        </div>
        {data.map((el) => (
          <div
            key={el.id}
            className={`p-2 rounded-lg cursor-pointer transition ${
              activeTab === el.id ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => {
              setActiveTab(el.id);
              sortCat(el.id);
            }}
          >
            <p className="text-md">
              {el.name[lang].length <= 12 ? el.name[lang] : el.name[lang].slice(0, 12) + "..."}
            </p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Filters</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="minPrice" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Min Price:
              </label>
              <input
                id="minPrice"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full border rounded-lg p-2 mt-1"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Max Price:
              </label>
              <input
                id="maxPrice"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full border rounded-lg p-2 mt-1"
                max="2700"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selected Price Range: ${minPrice} - ${maxPrice}
            </p>
            <button
              onClick={() => {
                setMinPrice(0);
                setMaxPrice(2700);
              }}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cat
            .filter((el) =>
              el.name?.[lang].toLowerCase().includes(search.toLowerCase())
            )
            .filter((el) => el.price >= minPrice && el.price <= maxPrice)
            .map((el) => (
              <div
                key={el.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <Link to={`/products/${el.id}`}>
                  <img
                    src={el.img || "/placeholder.jpg"}
                    alt={el.name?.[lang]}
                    className="w-full h-[270px]"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {el.name?.[lang]}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {el.desc?.[lang]?.length <= 70
                      ? el.desc?.[lang]
                      : el.desc?.[lang].slice(0, 70) + "..."}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-blue-600">${el.price}</p>
                    <button
                      onClick={() => addToCart(el)}
                      className="px-4 py-2 bg-blue-500 md:text-[10px] text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
