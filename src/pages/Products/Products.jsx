import { Input } from "@/components/ui/input";
import { useList } from "@/store/useList";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  let {search, setSearch, data, getUsers, sortCat} = useList();
//   const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2700);
  const lang = localStorage.getItem("lang");
  const { cat, getCat } = useList();

  useEffect(() => {
    getCat();
    getUsers();
  }, []);

  return <>
  <div className="w-[100%] m-auto  flex px-[20px] gap-[20px] my-[30px] items-center justify-start md:overflow-x-auto">
    <div
          className={`group relative cursor-pointer text-gray-700 dark:text-white ${
            activeTab === 0 ? "text-blue-500" : ""
          }`}
          onClick={() => {
            setActiveTab(0);
            getCat();
          }}
        >
          <p
            className={`text-lg md:text-[15px] transition-all duration-300 ${
              activeTab === 0 ? "text-blue-500" : "group-hover:text-blue-500"
            }`}
          >
            Все
          </p>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
              activeTab === 0 ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </div>
      {data.map((el) => (
        <div
          key={el.id}
          className={`group relative cursor-pointer text-gray-700  dark:text-white ${
            activeTab === el.id ? "text-blue-500" : ""
          }`}
          onClick={() => {
            setActiveTab(el.id);
            sortCat(el.id);
          }}
        >
          <p
            className={`text-lg md:text-[13px] transition-all duration-300 ${
              activeTab === el.id ? "text-blue-500" : "group-hover:text-blue-500"
            }`}
          >
            {el.name[lang].length <= 12 ?el.name[lang] :el.name[lang].slice(0,12)+"..."}
          </p>
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
              activeTab === el.id ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </div>
      ))}
    </div>
    
    <div className="container  mx-auto px-4 py-6">

      <div className="flex flex-col gap-6">
        <div className="w-full  p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-4">
            Filters
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="minPrice"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Min Price:
              </label>
              <input
                id="minPrice"
                type="number"
                value={minPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value <= maxPrice) setMinPrice(value);
                }}
                min="0"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Max Price:
              </label>
              <input
                id="maxPrice"
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minPrice) setMaxPrice(value);
                }}
                max="2700"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selected Price Range: ${minPrice} - ${maxPrice}
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full m-auto lg:w-3/4 grid grid-cols-4  sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {cat
            .filter((el) =>
              el.name?.[lang].toLowerCase().includes(search.toLowerCase())
            )
            .filter((el) => el.price >= minPrice && el.price <= maxPrice)
            .map((el) => (
              <Link to={`/products/${el.id}`}>
              <div
                className="bg-white flex flex-col items-center dark:bg-gray-700 rounded-lg shadow-lg w-[300px] md:w-[250px] transform transition duration-500 hover:scale-105"
                key={el.id}
                >
                <div className="w-[200px] bg-gray-100 dark:bg-gray-600">
                  <img
                    src={el.img || "/placeholder.jpg"}
                    alt={el.name?.[lang]}
                    className="w-full"
                    />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {el.name?.[lang]}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {el.desc?.[lang]?.length <= 70
                      ? el.desc?.[lang]
                      : el.desc?.[lang].slice(0, 70) + "..."}
                  </p>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-4">
                    ${el.price}
                  </p>
                </div>
              </div>
              </Link>
            ))}
        </div>
      </div>
      </div>
    </>
};

export default AllProducts;
