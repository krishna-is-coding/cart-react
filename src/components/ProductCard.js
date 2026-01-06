function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition text-sm flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 object-contain mb-2"
      />

      <h2 className="font-medium text-gray-800 line-clamp-2">
        {product.title}
      </h2>

      <p className="font-semibold text-gray-900 mt-1">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 border border-orange-500 text-orange-600 py-1 rounded text-xs hover:bg-orange-50"
      >
        ADD
      </button>
    </div>
  );
}

export default ProductCard;


