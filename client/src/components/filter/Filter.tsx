import { useEffect, useState } from 'react';
import { ReactComponent as DownChevron } from '../../assets/icons/chevron-down-solid.svg';
import { DrinkTypes, drinkTypes, ListItem } from '../../interface/Interfaces';

/**
 * An interface for capturing the filter types
 */
export interface ApplicableFilters {
    applyPriceRange: boolean;
    maxPrice: number;
    minPrice: number;
    onSale: boolean;
    drinks: DrinkTypes[];
}

interface FilterProps {
    products: ListItem[];
    returnProducts: (products: ListItem[]) => void;
}

/**
 * This function will filter the products based on a specified price range
 * @param max max price to filter by
 * @param min min price to filter by
 * @param products list of products
 * @returns items from the products list with price within the specified range
 */
export function filterByPrice(max: number, min: number, products: ListItem[]) {
    return products.filter((product) => {
        const truePrice = parseFloat(product.price.replaceAll('$', ''));
        return truePrice < max && truePrice > min;
    });
}

/**
 * This function will filter the list for items on sale when sale is set to 'true'
 * @param sale the status of sale
 * @param products list of products
 * @returns items from the products list that have sale set to 'true' or all items if set to 'false'
 */
export function filterBySale(sale: boolean, products: ListItem[]) {
    return sale ? products.filter((product) => product.isSale) : products;
}

/**
 * This function will take a drinks array, filtering for products that match the array
 * Returns all products if array is empty
 * @param drinks an array of drink type to compare to
 * @param products list of products
 * @returns items from the producst list that are contained in drinks array
 */
export function filterByDrinks(drinks: DrinkTypes[], products: ListItem[]) {
    return drinks.length === 0
        ? products
        : products.filter((product) => drinks.includes(product.type));
}

/**
 * This function will apply all filters to the product list.
 * @param criteria The combined filters
 * @param applyPriceRange boolean for whether price range is applied
 * @param products list of products
 * @returns the products that match all of the filters specified
 */
export function applyAllFilters(
    criteria: ApplicableFilters,
    products: ListItem[]
) {
    const productsInPriceRange = filterByPrice(
        criteria.maxPrice,
        criteria.minPrice,
        products
    );
    const productsOnSale = filterBySale(true, products);
    const productsByDrinks = filterByDrinks(criteria.drinks, products);
    return products
        .filter((product) =>
            criteria.applyPriceRange
                ? productsInPriceRange.includes(product)
                : product
        )
        .filter((product) =>
            criteria.drinks.length > 0
                ? productsByDrinks.includes(product)
                : product
        )
        .filter((product) =>
            criteria.onSale ? productsOnSale.includes(product) : product
        );
}

/**
 * This filter component will handle all
 * the filter to be applied on the product list
 */
function Filter(props: FilterProps) {
    const { products, returnProducts } = props;
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [allFilters, setAllFilters] = useState<ApplicableFilters>({
        applyPriceRange: false,
        maxPrice: 100,
        minPrice: 0,
        drinks: [],
        onSale: false,
    });
    const priceStep = 5;

    useEffect(() => {
        returnProducts(applyAllFilters(allFilters, products));
    }, [allFilters]);

    return (
        <div className="filter-container">
            <div>
                <h3
                    className="filter-toggle"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    Filters
                    <span style={{ padding: '0.25em' }}>
                        {
                            <DownChevron
                                className={`rotate-${
                                    showFilters ? '180' : '0'
                                }`}
                                height={'0.5em'}
                                fill={'white'}
                            />
                        }
                    </span>
                </h3>
            </div>
            <div
                className={`filter-content ${
                    !showFilters ? 'filter-hidden' : ''
                } `}
            >
                <div className="filter-item">
                    <h4 className="title">
                        Price Range?
                        <input
                            type="checkbox"
                            checked={allFilters.applyPriceRange}
                            onChange={() =>
                                setAllFilters((prev) => {
                                    return {
                                        ...prev,
                                        applyPriceRange: !prev.applyPriceRange,
                                    };
                                })
                            }
                        />
                    </h4>
                    <div
                        className={`filter-price ${
                            !allFilters.applyPriceRange && 'filter-hidden'
                        }`}
                    >
                        <label>
                            Minimum: ${allFilters.minPrice}
                            <input
                                type="range"
                                step={priceStep}
                                onChange={(e) =>
                                    setAllFilters((prev) => {
                                        return {
                                            ...prev,
                                            minPrice: parseFloat(
                                                e.target.value
                                            ),
                                        };
                                    })
                                }
                                value={allFilters.minPrice}
                                max={allFilters.maxPrice - 5}
                            />
                        </label>
                        <label>
                            Maximum: ${allFilters.maxPrice}
                            <input
                                type="range"
                                step={priceStep}
                                onChange={(e) =>
                                    setAllFilters((prev) => {
                                        return {
                                            ...prev,
                                            maxPrice: parseFloat(
                                                e.target.value
                                            ),
                                        };
                                    })
                                }
                                value={allFilters.maxPrice}
                                min={allFilters.minPrice + priceStep}
                            />{' '}
                        </label>
                    </div>
                </div>
                <div className="filter-item">
                    <h4 className="title">
                        On Sale?
                        <input
                            type="checkbox"
                            checked={allFilters.onSale}
                            onChange={() =>
                                setAllFilters((prev) => {
                                    return {
                                        ...prev,
                                        onSale: !prev.onSale,
                                    };
                                })
                            }
                        />
                    </h4>
                </div>
                <div className="filter-item">
                    <h4 className="title">Drink Type?</h4>
                    {drinkTypes.map((drink: string) => (
                        <label>
                            <input
                                type="checkbox"
                                value={drink}
                                checked={allFilters.drinks.includes(drink)}
                                onClick={() =>
                                    setAllFilters((prev) => {
                                        const newDrinks =
                                            allFilters.drinks.includes(drink)
                                                ? prev.drinks.filter(
                                                      (drinkType) =>
                                                          drinkType !== drink
                                                  )
                                                : [...prev.drinks, drink];
                                        return {
                                            ...prev,
                                            drinks: newDrinks,
                                        };
                                    })
                                }
                            />
                            <span>{drink}</span>
                        </label>
                    ))}
                </div>
                <p
                    className="filter-clear"
                    
                >
                    Clear Filter
                </p>
            </div>
        </div>
    );
}

export default Filter;
