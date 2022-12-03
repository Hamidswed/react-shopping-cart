import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import './ProductDetail.css'

const ProductDetail = () => {
  const productId = useParams();

  const [proDetail, setProDetail] = useState({});
  const url = `https://fakestoreapi.com/products/${productId.id}`;

  const getDetail = async () => {
    const response = await axios.get(url);
    const data = await response.data;
    setProDetail(data);
  };
  const fetchData = useCallback(getDetail, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container-detail">
      <h1>Product Details</h1>
      <div className="product-detail">
        <div className="img-detail">
          <img src={proDetail.image} alt={proDetail.title} />
        </div>
        <div className="data-detail">
          <h3>{proDetail.title}</h3>
          <p>{proDetail.description}</p>
          <h3>${proDetail.price}</h3>
        </div>
      </div>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
};
export default ProductDetail;
