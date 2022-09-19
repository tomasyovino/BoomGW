import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch } from "../lib/utils/request";
import { ProductDetails } from "../components/exports";

const ItemDetailContainer = () => {
  const [ products, setProducts ] = useState([]);
  const [ data, setData ] = useState({});
  const { idItem } = useParams();
  const productQuery = `*[_type == "product"]`;

  const find = async (products, id) => {
    let result = await products.find((product) => product.slug.current === id)
    setData(result);
  }
  
  useEffect(() => {
    customFetch(productQuery, setProducts);
  }, [productQuery]);
  find(products, idItem)

  return (<ProductDetails data={data} />);
}

export default ItemDetailContainer;