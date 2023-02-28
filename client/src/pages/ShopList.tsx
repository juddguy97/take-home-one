import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar from '../components/search/SearchBar';
import productData from '../assets/json/shopping-data.json';
import { ListItem } from '../interface/Interfaces';

function ShopListPage() {
    const products = productData as unknown as ListItem[];

    return (
        <>
            <div className="container">
                <div className="center row search-and-filter">
                    <div className="half">
                        <SearchBar />
                    </div>
                    <div className="half">
                        <Filter />
                    </div>
                </div>
                <div className="center">
                    <ShoppingGrid products={products} />
                </div>
            </div>
        </>
    );
}

export default ShopListPage;
