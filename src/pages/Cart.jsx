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
    <div className="container absolute left-[100px] my-8">
      {cart.length > 0 ? (
        <div className="flex">
          <div className="w-1/3">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="w-1/3 ml-8 fixed right-[100px]">
            <div className="bg-gray-100 p-4 rounded">
              <div className="text-xl font-semibold mb-4">Your Cart</div>
              <div className="mb-4">
                <span className="text-gray-700">Total Items: {cart.length}</span>
              </div>
              <div className="mb-4">
                <span className="text-gray-700">Total Amount: ${totalAmount}</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Check Out Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
