const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-14 bg-black text-white">
      <nav className="flex gap-8 md:gap-24">
        <a href="pricing" className="font-serif text-lg hover:text-gray-200">
          Pricing
        </a>
        <a
          href="#"
          className="text-2xl md:text-3xl font-serif hover:text-gray-200"
        >
          Best-Walnuts
        </a>
        <a href="#" className="font-serif text-lg hover:text-gray-200">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
