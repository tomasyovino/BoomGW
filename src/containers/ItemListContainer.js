import { useState } from "react";
import { Pagination, Product } from "../components/exports";


const ItemListContainer = ({ productData }) => {
    const [categorySelected, setCategorySelected] = useState("weapon");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    const sortedProducts = productData.sort((a, b) => a.price - b.price);
    const newProductsArray = sortedProducts.filter(item => item.category == categorySelected);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = newProductsArray.slice(firstPostIndex, lastPostIndex);

    function categoriesHandler(category) {
        setCurrentPage(1);
        setCategorySelected(category);
    };

    return (
        <div className="categories-container" id="categories">
            <div>
                <div className="side">
                    <button 
                        className={ categorySelected === "weapon" ? "category-selected" : "" } 
                        // onClick={() => setCategorySelected("weapon")}
                        onClick={() => categoriesHandler("weapon")}
                    >
                        Armamento
                    </button>
                    <button 
                        className={ categorySelected === "gangs" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("gangs")}
                        // onClick={() => setCategorySelected("gangs")}
                    >
                        Bandas
                    </button>
                    <button 
                        className={ categorySelected === "assetsGangs" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("assetsGangs")}
                        // onClick={() => setCategorySelected("assetsGangs")}
                    >
                        Activos Bandas
                    </button>
                    <button 
                        className={ categorySelected === "vip" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("vip")}
                        // onClick={() => setCategorySelected("vip")}
                    >
                        VIP
                    </button>
                    <button 
                        className={ categorySelected === "personal" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("personal")}
                        // onClick={() => setCategorySelected("personal")}
                    >
                        Personales
                    </button>
                    <button 
                        className={ categorySelected === "cars" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("cars")}
                        // onClick={() => setCategorySelected("cars")}
                    >
                        Vehículos
                    </button>
                    <button 
                        className={ categorySelected === "serverCars" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("serverCars")}
                        // onClick={() => setCategorySelected("serverCars")}
                    >
                        Vehículos del Servidor
                    </button>
                    <button 
                        className={ categorySelected === "admin" ? "category-selected" : "" } 
                        onClick={() => categoriesHandler("admin")}
                        // onClick={() => setCategorySelected("admin")}
                    >
                        Administrativas
                    </button>
                </div>
                <div className="side-right">
                    {
                        currentPosts.map((product) => {
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
            <Pagination 
                totalPosts={newProductsArray} 
                postsPerPage={postsPerPage} 
                setCurrentPage={setCurrentPage} 
                currentPage={currentPage}
            />
        </div>
    );
}

export default ItemListContainer;