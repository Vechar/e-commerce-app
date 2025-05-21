function ProductItem({ product }) {
  return (
    <div className="card">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
            <p className="card-text">Quantity: {product.quantity}</p>
        </div>
    </div>
  );
}

export default ProductItem;