function Navbar({ count, openCart }) {
  return (
    <nav className="bg-orange-500 text-white px-4 py-2 flex justify-between items-center sticky top-0 z-40">
      <h1 className="text-base font-semibold">Fake Store</h1>

      <button
        onClick={openCart}
        className="bg-white text-orange-600 px-3 py-1 rounded text-sm font-medium"
      >
        Cart ({count})
      </button>
    </nav>
  );
}

export default Navbar;
