import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const navigateToProductHandler = () => {
        navigate('products');
    }
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={navigateToProductHandler}>Go to Product</button>
        </div>
    );
}
 
export default HomePage;