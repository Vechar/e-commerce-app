import ProductItem from './ProductItem';

function ProductList({ productList }) {
    return (
        <div>
            <div className="container">
                <h1>Product List</h1>
                <div class="product-grid">
                    {productList.map((product) => (
                        <div key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;