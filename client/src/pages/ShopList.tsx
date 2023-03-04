import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar, { searchProducts } from '../components/search/SearchBar';
import productData from '../assets/json/shopping-data.json';
import { ListItem } from '../interface/Interfaces';
import { useEffect, useState } from 'react';

function ShopListPage() {
    const products = productData as ListItem[];
    const [searchCriteria, setSearchCritiera] = useState<string>('');
    const [searchedProducts, setSearchedProducts] =
        useState<ListItem[]>(products);
    const [filteredProducts, setFilteredProducts] =
        useState<ListItem[]>(searchedProducts);

    const [finalProducts, setFinalProducts] = useState<ListItem[]>(products);

    useEffect(() => {
        setFinalProducts(searchProducts(searchCriteria, products));
    }, [searchCriteria]);

    return (
        <>
            <div className="container">
                <div className="center search-and-filter">
                    <div>
                        <SearchBar returnSearchCriteria={setSearchCritiera} />
                        <Filter
                            products={products}
                            returnProducts={setFilteredProducts}
                        />
                    </div>
                </div>
                <div className="center">
                    <ShoppingGrid products={finalProducts} />
                </div>
            </div>
        </>
    );
}

export default ShopListPage;
