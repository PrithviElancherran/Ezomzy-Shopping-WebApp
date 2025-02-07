import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto py-8">
      {cart.length > 0 ? (
        <div className="flex justify-between">
          <div className="w-3/5 pr-8">
            <h1 className="font-bold text-3xl mb-6">Your Cart</h1>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-2/5 bg-gray-100 p-8">
            <div className="font-bold text-lg mb-6">Summary</div>
            <div className="border-b border-gray-300 pb-4">
              <p className="text-gray-600">Total Items: {cart.length}</p>
            </div>
            <div className="pt-4">
              <p className="text-lg font-bold">Total Amount:</p>
              <p className="text-2xl text-green-700">${totalAmount}</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 mt-6 rounded">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="font-bold text-3xl mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
