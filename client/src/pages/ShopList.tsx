import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar from '../components/search/SearchBar';

function ShopListPage() {
    return (
        <>
            <SearchBar />
            <Filter />
            <ShoppingGrid />
        </>
    );
}

export default ShopListPage;
