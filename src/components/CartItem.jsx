import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white shadow-md p-4 mb-4 flex items-center rounded-md hover:shadow-lg transition duration-300">
      <div className="w-20 h-20 overflow-hidden mr-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h1>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <div className="flex items-center">
          <p className="text-blue-500 font-semibold mr-4">${item.price}</p>
          <div
            onClick={removeFromCart}
            className="cursor-pointer text-red-500 hover:text-red-700 transition duration-300"
          >
            <FcDeleteDatabase size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
