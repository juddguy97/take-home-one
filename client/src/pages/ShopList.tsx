import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar from '../components/search/SearchBar';
import productData from '../assets/json/shopping-data.json';
import { ListItem } from '../interface/Interfaces';
import { useEffect, useState } from 'react';
import {
    ApplicableFilters,
    applyAllFilters,
    defaultFilter,
} from '../components/filter/FilterUtil';
import { searchProducts } from '../components/search/SearchBarUtil';

function ShopListPage() {
    const products = productData as ListItem[];
    const [searchCriteria, setSearchCritiera] = useState<string>('');
    const [allFilters, setAllFilters] = useState<ApplicableFilters>(defaultFilter);

    const [finalProducts, setFinalProducts] = useState<ListItem[]>(products);

    const resetSearchAndFilter = () => {
        setSearchCritiera('');
        setAllFilters(defaultFilter);
    }

    useEffect(() => {
        setFinalProducts(
            searchProducts(searchCriteria, products).filter((product) =>
                applyAllFilters(allFilters, products).includes(product)
            )
        );
    }, [searchCriteria, allFilters]);

    return (
        <>
            <div className="container">
                <div className="center search-and-filter">
                    <div>
                        <SearchBar appliedSearchTerm={searchCriteria} returnSearchCriteria={setSearchCritiera} />
                        <Filter
                            allFilters={allFilters}
                            setAllFilters={setAllFilters}
                        />
                        <p className="clear-btn reset" onClick={resetSearchAndFilter}>Reset Search &amp; Filter</p>
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
