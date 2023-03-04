import { DrinkTypes, ListItem } from '../../interface/Interfaces';

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

export const defaultFilter: ApplicableFilters = {
    applyPriceRange: false,
    maxPrice: 100,
    minPrice: 0,
    drinks: [],
    onSale: false,
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
