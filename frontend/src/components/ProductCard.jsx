import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      // add to cart
      addToCart(product);
    }
  };

  return (
    <div className="glass rounded-xl border border-white/10 shadow-md hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition transform hover:-translate-y-1 w-full max-w-xs flex flex-col">
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <img
          className="object-cover w-full h-full"
          src={product.image}
          alt="product image"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-5">
        <div>
          <h5 className="text-xl font-bold tracking-tight text-[#453015] mb-2">
            {product.name}
          </h5>
          <p className="text-sm text-gray-500  min-h-[3.6em]">
            {product.description}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-xl font-bold text-[#453015] mb-3">
            €{product.price}
          </p>
          <button
            className=" flex items-center justify-center rounded-lg bg-[#734b91] px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} className="mr-2" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
