import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import GoBackButton from "../components/GoBackButton";

const CategoryPage = () => {
  const { fetchProductsByCategory, products } = useProductStore();

  const { category } = useParams();

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [fetchProductsByCategory, category]);

  console.log("products:", products);
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#F7EBD2,_#F6D6A8,_#F2BFAF)]">
      <div className="pt-20 md:pt-35 relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GoBackButton />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products?.length === 0 && (
            <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
              No products found
            </h2>
          )}

          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default CategoryPage;
