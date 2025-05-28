import CategoryItem from "../components/CategoryItem.jsx";

const categories = [
  {
    href: "/cakes",
    name: "Cakes",
    imageUrl: "/cheesecake.jpg",
  },
  {
    href: "/cupcakes",
    name: "Cupcakes",
    imageUrl: "/unicorncupcakes.jpg",
  },
  {
    href: "/cookies",
    name: "Cookies",
    imageUrl: "/cookies.jpg",
  },
  {
    href: "/pastries",
    name: "Pastries",
    imageUrl: "/strudel.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen md:overflow-hidden bg-[linear-gradient(135deg,_#F7EBD2,_#F6D6A8,_#F2BFAF)]">
      <div className="relative w-full h-64 md:h-[60vh] overflow-hidden">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-15 md:top-25 left-0 w-full h-full object-cover"
        ></video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
        <h1 className="pb-4 text-2xl md:mt-6 md:text-4xl font-bold text-[#8B7E74] text-center">
          Discover Our Sweet Selection
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 md:mt-8">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
