import "./CartProduct.css";

export default function CartProducts({
  cartProducts,
  handelAddProduct,
  handelRemoveProduct,
  handleCartClear,
}) {
  const totalPrice = cartProducts.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-item">
      <h2 className="cart-item-header">Cart Items</h2>
      <div className="clear-cart">
        {cartProducts.length >= 1 && (
          <button className="clear-cart-btn" onClick={handleCartClear}>
            Clear Cart
          </button>
        )}
      </div>
      {cartProducts.length === 0 ? (
        <div className="cart-item-empty">No items are added</div>
      ) : (
        <div>
          {cartProducts.map((item) => (
            <div key={item.id} className="cart-item-list">
              <img src={item.img} alt={item.name} className="cart-item-image" />
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-function">
                <button
                  className="cart-item-add"
                  onClick={() => handelAddProduct(item)}
                >
                  +
                </button>
                <span>{item.quantity}</span>

                <button
                  className="cart-item-remove"
                  onClick={() => handelRemoveProduct(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-item-price">
                Rs.{item.quantity * item.price}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-item-total-price-name">
        Total Price
        <div className="cart-item-total-price">Rs.{totalPrice}</div>
      </div>
    </div>
  );
}
