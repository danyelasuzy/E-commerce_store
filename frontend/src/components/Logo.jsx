const Logo = () => {
  return (
    <div className="flex-start justify-center">
      <div className="h-15 w-20 overflow-hidden flex items-center justify-center md:ml-3.5 md:h-25 md:w-30">
        <img
          src={`${import.meta.env.BASE_URL}sweet-crumbs.png`}
          alt="bowl"
          className="h-full w-full object-contain scale-110 "
        />
      </div>
    </div>
  );
};

export default Logo;
