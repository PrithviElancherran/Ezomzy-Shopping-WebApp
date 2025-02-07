import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 w-full sm:w-1/2 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-lg">
      <div className="w-full">
        <img src={item.image} className="w-full" alt={item.title} />
      </div>
      <div className="w-full">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">${item.price}</p>
          <div onClick={removeFromCart} className="text-red-500 cursor-pointer">
            <FcDeleteDatabase/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
