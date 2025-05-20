import ProductItem from './ProductItem';

function ProductList({ productList }) {
    return (
        <div>
            <div className="container mt-3">
                <h1 className="mb-3">Product List</h1>
                <div
                    className="product-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem',
                    }}
                >
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