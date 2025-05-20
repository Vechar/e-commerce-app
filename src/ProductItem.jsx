function ProductItem({ product }) {
  return (
    <div className="card product-item" style={{ width: "18rem" }}>
        <img class="card-img-top" src={product.image} alt={product.name} />
        <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
            <p class="card-text">${product.price}</p>
            <p class="card-text">Quantity: {product.quantity}</p>
        </div>
    </div>
  );
}

export default ProductItem;