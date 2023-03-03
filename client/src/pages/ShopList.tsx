import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar from '../components/search/SearchBar';
import productData from '../assets/json/shopping-data.json';
import { ListItem } from '../interface/Interfaces';
import { useState } from 'react';

function ShopListPage() {
    const products = productData as ListItem[];
    const [searchedProducts, setSearchedProducts] =
        useState<ListItem[]>(products);
    const [filteredProducts, setFilteredProducts] =
        useState<ListItem[]>(searchedProducts);

    return (
        <>
            <div className="container">
                <div className="center search-and-filter">
                   
                        <SearchBar
                            products={products}
                            returnProducts={setSearchedProducts}
                        />
                    
                        <Filter
                            products={products}
                            returnProducts={setFilteredProducts}
                        />
                    
                </div>
                <div className="center">
                    <ShoppingGrid products={searchedProducts.filter((product) => filteredProducts.includes(product))} />
                </div>
            </div>
        </>
    );
}

export default ShopListPage;
