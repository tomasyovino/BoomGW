import { useEffect, useState } from "react";
import { Product } from "../components/exports";


const ItemListContainer = ({ productData }) => {

    const [categorySelected, setCategorySelected] = useState("gangs");
    const [productByCategory, setProductByCategory] = useState([]);

    const findByCategory = async (category) => {
        let result = await productData.filter((product) => product.category === category)
        setProductByCategory(result);
    }

    useEffect(() => {
        findByCategory(categorySelected)
        // eslint-disable-next-line
    }, [categorySelected]);
    
    return (
        <div className="categories-container">
            <h3>Categorías</h3>
        { 
            productByCategory &&
                <div>
                    <div className="side">
                        <button 
                            className={ categorySelected === "gangs" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("gangs")}
                        >
                            Bandas
                        </button>
                        <button 
                            className={ categorySelected === "assetsGangs" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("assetsGangs")}
                        >
                            Activos Bandas
                        </button>
                        <button 
                            className={ categorySelected === "vip" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("vip")}
                        >
                            VIP
                        </button>
                        <button 
                            className={ categorySelected === "personal" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("personal")}
                        >
                            Personales
                        </button>
                        <button 
                            className={ categorySelected === "weapon" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("weapon")}
                        >
                            Armamento
                        </button>
                        <button 
                            className={ categorySelected === "cars" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("cars")}
                        >
                            Autos
                        </button>
                        <button 
                            className={ categorySelected === "admin" ? "category-selected" : "" } 
                            onClick={() => setCategorySelected("admin")}
                        >
                            Administrativas
                        </button>
                    </div>
                    <div className="products-container">
                        {productByCategory?.map((product) => <Product key={product._id} product={product} />)}
                    </div>
                </div>
        }
        </div>
    )
}

export default ItemListContainer;