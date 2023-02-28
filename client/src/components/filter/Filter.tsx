import { useState } from 'react';

/**
 * This filter component will handle all
 * the filter to be applied on the product list
 */
function Filter() {
    const [priceMax, setPriceMax] = useState<number>(100);
    const [priceMin, setPriceMin] = useState<number>(0);
    const [onSale, setOnSale] = useState<boolean>(false);

    return (
        <>
            <label>
                <h2>Price</h2> Minimum:{' '}
                <input
                    type="range"
                    step={5}
                    onChange={(e) =>
                        setPriceMin(e.target.value as unknown as number)
                    }
                    max={priceMax}
                />{' '}
                {priceMin}
                Maximum:{' '}
                <input
                    type="range"
                    step={5}
                    onChange={(e) =>
                        setPriceMax(e.target.value as unknown as number)
                    }
                    min={priceMin}
                />{' '}
                {priceMax}
            </label>
            <label>
                On Sale?
                <input
                    type="checkbox"
                    checked={onSale}
                    onChange={() => setOnSale(!onSale)}
                />
            </label>
            <label>
                Drink Type? Beer{' '}
                <input
                    type="checkbox"
                    value="Beer"
                />
                Wine{' '}
                <input
                    type="checkbox"
                    value="Wine"
                />
                Cider{' '}
                <input
                    type="checkbox"
                    value="Cider"
                />
            </label>
        </>
    );
}

export default Filter;
