import {
    filterByDrinks,
    filterByPrice,
    filterBySale,
    applyAllFilters,
    ApplicableFilters,
} from './Filter';
import productData from '../../assets/json/shopping-data.json';
import { ListItem } from '../../interface/Interfaces';

const products = productData as ListItem[];

test('Filter for items on sale', () => {
    expect(filterBySale(true, products)).toEqual(
        products.filter((product) => product.isSale === true)
    );
});

test('Filter for items with sale set to "false"', () => {
    expect(filterBySale(false, products)).toEqual(products);
});

test('Filter for items for only "Cider"', () => {
    expect(filterByDrinks(['Cider'], products)).toEqual(
        products.filter((product) => product.type === 'Cider')
    );
});

test('Filter for items for Wine or Beer"', () => {
    expect(filterByDrinks(['Wine', 'Beer'], products)).toEqual(
        products.filter(
            (product) => product.type === 'Wine' || product.type === 'Beer'
        )
    );
});

test('Filter by drinks where no drinks are specified"', () => {
    expect(filterByDrinks([], products)).toEqual(products);
});

test('Filter by price range of $20-$40"', () => {
    expect(filterByPrice(40, 20, products)).toEqual(
        products.filter((product) => {
            const truePrice = parseFloat(product.price.replaceAll('$', ''));
            return truePrice < 40 && truePrice > 20;
        })
    );
});

test('Filter by price range of where max is greater than mine"', () => {
    expect(filterByPrice(0, 100, products)).toEqual([]);
});

// Tests for the applyAllFilters will use this 'testAllFilter' to capture variations
const testAllFilterBeer: ApplicableFilters = {
    applyPriceRange: true,
    maxPrice: 10,
    minPrice: 0,
    drinks: ['Beer'],
    onSale: false,
};

// Setting product arrays for combination testing
const productsInPriceRange = filterByPrice(
    testAllFilterBeer.maxPrice,
    testAllFilterBeer.minPrice,
    products
);
const productsOnSale = filterBySale(true, products);
const productsBeer = filterByDrinks(testAllFilterBeer.drinks, products);

test('Filter with price range and drink types', () => {
    expect(applyAllFilters(testAllFilterBeer, products)).toEqual(
        productsInPriceRange.filter((product) => productsBeer.includes(product))
    );
});

// Creating filter for on sale
const testAllFilterBeerOnSale: ApplicableFilters = {
    applyPriceRange: false,
    maxPrice: 50,
    minPrice: 0,
    drinks: ['Beer'],
    onSale: true,
};

test('Filter with drink type and sale (without price range)', () => {
    expect(applyAllFilters(testAllFilterBeerOnSale, products)).toEqual(
        productsBeer.filter((product) => productsOnSale.includes(product))
    );
});

// Creating filter for on sale
const testAllFilterBeerOnSaleWithPriceRange: ApplicableFilters = {
    applyPriceRange: true,
    maxPrice: 10,
    minPrice: 0,
    drinks: ['Beer'],
    onSale: true,
};

test('Filter with price range, drink type and sale', () => {
    expect(
        applyAllFilters(testAllFilterBeerOnSaleWithPriceRange, products)
    ).toEqual(
        productsOnSale
            .filter((product) => productsBeer.includes(product))
            .filter((product) => productsInPriceRange.includes(product))
    );
});

// Setting drinks to empty
const testAllFilterNoDrinkType: ApplicableFilters = {
    applyPriceRange: true,
    maxPrice: 10,
    minPrice: 0,
    drinks: [],
    onSale: true,
};

test('Filter with price range and sale', () => {
    expect(applyAllFilters(testAllFilterNoDrinkType, products)).toEqual(
        productsOnSale.filter((product) =>
            productsInPriceRange.includes(product)
        )
    );
});

// Setting a full range price, no drink types and onSale is false
const testAllFilterNoFilters: ApplicableFilters = {
    applyPriceRange: false,
    maxPrice: 100,
    minPrice: 0,
    drinks: [],
    onSale: false,
};

test('No filter applied', () => {
    expect(applyAllFilters(testAllFilterNoFilters, products)).toEqual(products);
});
