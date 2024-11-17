import { Input } from "@/components/ui/input";
import { useList } from "@/store/useList";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  let {search, setSearch} = useList();
//   const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2700);
  const lang = localStorage.getItem("lang");
  const { cat, getCat } = useList();

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
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
        <div className="w-full lg:w-3/4 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cat
            .filter((el) =>
              el.name?.[lang].toLowerCase().includes(search.toLowerCase())
            )
            .filter((el) => el.price >= minPrice && el.price <= maxPrice)
            .map((el) => (
              <div
                className="bg-white flex flex-col items-center dark:bg-gray-700 rounded-lg shadow-lg w-[300px] transform transition duration-500 hover:scale-105"
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
