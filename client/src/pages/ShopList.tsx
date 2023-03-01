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

    return (
        <>
            <div className="container">
                <div className="center row search-and-filter">
                    <div className="half">
                        <SearchBar
                            products={products}
                            returnProducts={setSearchedProducts}
                        />
                    </div>
                    <div className="half">
                        <Filter />
                    </div>
                </div>
                <div className="center">
                    <ShoppingGrid products={searchedProducts} />
                </div>
            </div>
        </>
    );
}

export default ShopListPage;
