import { useList } from '@/store/useList';
import React from 'react';

const Cart = () => {
  const lang = localStorage.getItem("lang") || "en";
  const { carts, plusCart, minusCart, getTotalPrice } = useList();

  return (
    <div className="max-w-4xl mx-auto p-4">
      {carts.length > 0 ? (
        <>
          {carts.map((el, index) => (
            <div
              key={index}
              className="flex items-center md:flex-col gap-6 mt-2 p-4 border border-gray-200 rounded-lg shadow-md"
            >
              <img
                src={el.img}
                alt={el.name?.[lang]}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1 items-center">
                <h1 className="text-lg items-center font-semibold text-gray-800">
                  {el.name?.[lang] || "Item Name"}
                </h1>
                <p className="text-gray-600">{el.desc?.[lang] || "Description"}</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <button
                    onClick={() => minusCart(el.id)}
                    className="px-3 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300"
                    >
                    -
                    </button>
                    <p className="text-lg font-semibold">{el.cnt}</p>
                    <button
                    onClick={() => plusCart(el.id)}
                    className="px-3 py-1 text-lg font-bold bg-gray-200 rounded hover:bg-gray-300"
                    >
                    +
                    </button>
                </div>
                <h1>
                    ${el.price}
                </h1>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold text-gray-800">
              Total: {getTotalPrice().toFixed(2)} SM
            </h2>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
