import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const params = useParams();

    return (
        <>
            <h1>Product Deatils</h1>
            <p>Product {params.id}</p>
            <Link to=".." relative="path">Back</Link>
        </>
    );
}
 
export default ProductDetailsPage;