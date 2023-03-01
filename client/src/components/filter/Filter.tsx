import { useState } from 'react';
import { ReactComponent as UpChevron } from '../../assets/icons/chevron-up-solid.svg';
import { ReactComponent as DownChevron } from '../../assets/icons/chevron-down-solid.svg';
import { DrinkTypes, drinkTypes, ListItem } from '../../interface/Interfaces';

interface ApplicableFilters {
    maxPrice?: number;
    minPrice?: number;
    onSale?: boolean;
    drinks?: DrinkTypes[];
}

export function applyFilter (criteria: ApplicableFilters, products: ListItem[]) {
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
