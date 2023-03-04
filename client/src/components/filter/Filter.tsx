import { useState } from 'react';
import { ReactComponent as DownChevron } from '../../assets/icons/chevron-down-solid.svg';
import { drinkTypes } from '../../interface/Interfaces';
import { ApplicableFilters } from './FilterUtil';
interface FilterProps {
    allFilters: ApplicableFilters;
    setAllFilters: (
        newFilter:
            | ApplicableFilters
            | ((prevState: ApplicableFilters) => ApplicableFilters)
    ) => void;
}

/**
 * This filter component will handle all
 * the filter to be applied on the product list
 */
function Filter(props: FilterProps) {
    const { allFilters, setAllFilters } = props;
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const priceStep = 5;

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
                <div className="filter-item"></div>
                <p className="clear-btn">Clear Filter</p>
            </div>
        </div>
    );
}

export default Filter;
