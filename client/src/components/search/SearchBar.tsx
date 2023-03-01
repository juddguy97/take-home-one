import { useState } from 'react';
import { ListItem } from '../../interface/Interfaces';
import { ReactComponent as SearchIcon } from '../../assets/icons/magnifying-glass-solid.svg';

interface SearchBarProps {
    products: ListItem[];
    returnProducts: (products: ListItem[]) => void;
}

/**
 * The SearchBar component will take a text
 * input and use it to search over the products.
 * It will search over any field that is of a string type.
 * Currently, the fields that will be checked against are:
 *  - product name
 *  - product type
 *  - product price
 */
export function searchProducts(criteria: string, products: ListItem[]) {
    if (!criteria) return products;
    return products.filter((product: ListItem) => {
        const check = [product.productName, product.price, product.type].filter(
            (value) => value.toLowerCase().includes(criteria.toLowerCase())
        );
        return check.length > 0;
    });
}

function SearchBar(props: SearchBarProps) {
    const { products, returnProducts } = props;
    const [searchCriteria, setSearchCriteria] = useState<string>('');
    return (
        <div>
            <div className="search-form">
                <h3 className="search-title">Search</h3>
                <input
                    className="search-bar"
                    type="text"
                    style={{ margin: 0 }}
                    value={searchCriteria}
                    onChange={(e) => setSearchCriteria(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter')
                            returnProducts(
                                searchProducts(searchCriteria, products)
                            );
                    }}
                />
                <div
                    className="search-btn"
                    onClick={() =>
                        returnProducts(searchProducts(searchCriteria, products))
                    }
                >
                    <SearchIcon
                        height={'1em'}
                        fill={'white'}
                    />
                </div>
            </div>
            <p
                className="search-clear"
                onClick={() => {
                    setSearchCriteria('');
                    returnProducts(searchProducts('', products));
                }}
            >
                Clear Search
            </p>
        </div>
    );
}

export default SearchBar;
