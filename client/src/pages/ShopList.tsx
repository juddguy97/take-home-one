import Filter from '../components/filter/Filter';
import ShoppingGrid from '../components/grid/ShoppingGrid';
import SearchBar from '../components/search/SearchBar';

function ShopListPage() {
    return (
        <>
            <div className='container'>
                <div>
                    <SearchBar />
                </div>
                <div>
                    <Filter />
                </div>
                <div>
                    <ShoppingGrid />
                </div>
            </div>
        </>
    );
}

export default ShopListPage;
