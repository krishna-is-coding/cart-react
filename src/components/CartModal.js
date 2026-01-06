function CartModal({ cart, close, updateQty }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  ).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-4 rounded-md max-h-[80vh] overflow-y-auto text-sm">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <button onClick={close} className="text-red-500 text-lg font-bold">
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 mb-3 border-b pb-2">
                <img
                  src={item.image}
                  className="h-12 w-12 object-contain"
                />

                <div className="flex-1">
                  <p className="font-medium line-clamp-1">
                    {item.title}
                  </p>
                  <p className="font-semibold">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-2 bg-gray-200 rounded"
                  >−</button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-2 bg-gray-200 rounded"
                  >+</button>
                </div>
              </div>
            ))}

            <div className="flex justify-between font-semibold text-base mt-3">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button className="w-full bg-orange-500 text-white py-2 mt-3 rounded">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;


