import { Link } from "react-router-dom";

const ProductPage = () => {
    const PRODUCTS = [
        {id: 'p1', title: 'Product 1'},
        {id: 'p2', title: 'Product 2'},
        {id: 'p3', title: 'Product 3'},
    ]
    return (
        <>
            <h1>Product Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li>
                        <Link to={product.id}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default ProductPage;