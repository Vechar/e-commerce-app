import './App.css';
import ProductList from './ProductList';
import { useState } from 'react';

function App() {
    const [productList, setProductList] = useState([
        { id: 1, name: 'Product 1', image: "https://placehold.co/400", description: 'Description of Product 1', price: 10, quantity: 10 },
        { id: 2, name: 'Product 2', image: "https://placehold.co/400", description: 'Description of Product 2', price: 20, quantity: 59 },
        { id: 3, name: 'Product 3', image: "https://placehold.co/400  ", description: 'Description of Product 3', price: 30, quantity: 3 },
        { id: 4, name: 'Product 4', image: "https://placehold.co/400", description: 'Description of Product 4', price: 40, quantity: 0 },
        { id: 5, name: 'Product 5', image: "https://placehold.co/400", description: 'Description of Product 5', price: 50, quantity: 5 },
        { id: 6, name: 'Product 6', image: "https://placehold.co/400", description: 'Description of Product 6', price: 60, quantity: 2 },
        { id: 7, name: 'Product 7', image: "https://placehold.co/400", description: 'Description of Product 7', price: 70, quantity: 1 },
        { id: 8, name: 'Product 8', image: "https://placehold.co/400", description: 'Description of Product 8', price: 80, quantity: 0 },
        { id: 9, name: 'Product 9', image: "https://placehold.co/400", description: 'Description of Product 9', price: 90, quantity: 0 },
        { id: 10, name: 'Product 10', image: "https://placehold.co/400", description: 'Description of Product 10', price: 100, quantity: 0 },
        { id: 11, name: 'Product 11', image: "https://placehold.co/400", description: 'Description of Product 11', price: 110, quantity: 9 },
        { id: 12, name: 'Product 12', image: "https://placehold.co/400", description: 'Description of Product 12', price: 120, quantity: 0 },
        { id: 13, name: 'Product 13', image: "https://placehold.co/400", description: 'Description of Product 13', price: 130, quantity: 1 },
        { id: 14, name: 'Product 14', image: "https://placehold.co/400", description: 'Description of Product 14', price: 140, quantity: 909 },
        { id: 15, name: 'Product 15', image: "https://placehold.co/400", description: 'Description of Product 15', price: 150, quantity: 0 },
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the E-commerce App</h1>
            </header>
            <main id="main-content">
                <ProductList productList={productList} />
                
            </main>
        </div>
    );
}

export default App;
