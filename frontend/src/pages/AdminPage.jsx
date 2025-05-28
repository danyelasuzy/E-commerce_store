import { PlusCircle, ShoppingBasket } from "lucide-react";
import { useEffect, useState } from "react";

import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import { useProductStore } from "../stores/useProductStore";

const tabs = [
  { id: "create", label: "Create Product", icon: PlusCircle },
  { id: "products", label: "Products", icon: ShoppingBasket },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  const { fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16 bg-[linear-gradient(135deg,_#F7EBD2,_#F6D6A8,_#F2BFAF)] ">
        <div className="flex justify-center mb-8 mt-8 md:mt-15">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-[#F67280] text-white"
                  : "bg-[#734b91] text-gray-300 hover:bg-gray-600"
              }`}
            >
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "create" && <CreateProductForm />}
        {activeTab === "products" && <ProductsList />}
      </div>
    </div>
  );
};
export default AdminPage;
