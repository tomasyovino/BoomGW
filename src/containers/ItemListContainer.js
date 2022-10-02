import { useState } from "react";
import { Product } from "../components/exports";


const ItemListContainer = ({ productData }) => {
    const [categorySelected, setCategorySelected] = useState("weapon");
    const sortedProducts = productData.sort((a, b) => a.price - b.price);

    return (
        <div className="categories-container" id="categories">
            <div>
                <div className="side">
                    <button 
                        className={ categorySelected === "weapon" ? "category-selected" : "" } 
                        onClick={() => setCategorySelected("weapon")}
                    >
                        Armamento
                    </button>
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
                <div className="side-right">
                    {
                        sortedProducts.map((product) => {
                            if (product.category === categorySelected) {
                                return (
                                    <div className="products-container">
                                        <Product key={product._id} product={product} />
                                    </div>
                                );
                            };
                            return null;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;