import { useState } from 'react';
import { ReactComponent as UpChevron } from '../../assets/icons/chevron-up-solid.svg';
import { ReactComponent as DownChevron } from '../../assets/icons/chevron-down-solid.svg';
import { DrinkTypes, drinkTypes, ListItem } from '../../interface/Interfaces';

/**
 * An interface for capturing the filter types
 */
interface ApplicableFilters {
    maxPrice?: number;
    minPrice?: number;
    onSale?: boolean;
    drinks?: DrinkTypes[];
}

/**
 * This function will filter the products based on a specified price range
 * Will return all products if range is invalid (ie max is less than min)
 * @param max max price to filter by
 * @param min min price to filter by
 * @param products list of products
 * @returns items from the products list with price within the specified range
 */
export function filterByPrice(max: number, min: number, products: ListItem[]) {
    return products;
}

/**
 * This function will filter the list for items on sale when sale is set to 'true'
 * @param sale the status of sale
 * @param products list of products
 * @returns items from the products list that have sale set to 'true' or all items if set to 'false'
 */
export function filterBySale(sale: boolean, products: ListItem[]) {
    return products;
}

/**
 * This function will take a drinks array, filtering for products that match the array
 * Returns all products if array is empty
 * @param drinks an array of drink type to compare to
 * @param products list of products
 * @returns items from the producst list that are contained in drinks array
 */
export function filterByDrinks(drinks: DrinkTypes[], products: ListItem[]) {
    return products;
}

/**
 * This function will apply all filters to the product list.
 * @param criteria The combined filters
 * @param products list of products
 * @returns the products that match all of the filters specified
 */
export function applyAllFilters (criteria: ApplicableFilters, products: ListItem[]) {
    if(Object.keys(criteria).length === 0) return products;
}

/**
 * This filter component will handle all
 * the filter to be applied on the product list
 */
function Filter() {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [priceMax, setPriceMax] = useState<number>(100);
    const [priceMin, setPriceMin] = useState<number>(0);
    const [onSale, setOnSale] = useState<boolean>(false);
    const priceStep = 5;

    console.log(parseFloat("$25.99".replaceAll("$", "")));

    return (
        <div className="filter-container">
            <div>
                <h2
                    className="filter-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filters
                    <span style={{ padding: '0.25em' }}>
                        {showFilters ? (
                            <UpChevron
                                height={'0.75em'}
                                fill={'white'}
                            />
                        ) : (
                            <DownChevron
                                height={'0.75em'}
                                fill={'white'}
                            />
                        )}
                    </span>
                </h2>
            </div>
            <div
                className={`filter-content ${!showFilters && 'filter-hidden'} `}
            >
                <div className="filter-item">
                    <h3 className="title">Price</h3>
                    <label>
                        Minimum: ${priceMin}
                        <input
                            type="range"
                            step={priceStep}
                            onChange={(e) =>
                                setPriceMin(parseFloat(e.target.value))
                            }
                            value={priceMin}
                            max={priceMax-5}
                        />
                    </label>
                    <label>
                        Maximum: ${priceMax}
                        <input
                            type="range"
                            step={priceStep}
                            onChange={(e) =>
                                setPriceMax(parseFloat(e.target.value))
                            }
                            value={priceMax}
                            min={priceMin+priceStep}
                        />{' '}
                    </label>
                </div>
                <div className="filter-item">
                    <label>
                        On Sale?
                        <input
                            type="checkbox"
                            checked={onSale}
                            onChange={() => setOnSale(!onSale)}
                        />
                    </label>
                </div>
                <div className="filter-item">
                    <h3 className="title">Drink Type?</h3>
                    {
                        drinkTypes.map((drink: string) => <label>
                        <input
                            type="checkbox"
                            value={drink}
                        />
                        <span>{drink}</span>
                        </label>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Filter;
