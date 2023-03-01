import { filterByDrinks, filterByPrice, filterBySale, applyAllFilters } from './Filter';
import productData from '../../assets/json/shopping-data.json';
import { ListItem } from '../../interface/Interfaces';

const products = productData as ListItem[];

test('Filter for items on sale', () => {
  expect(filterBySale(true, products)).toEqual(products.filter((product) => product.isSale === true));
});

test('Filter for items with sale set to "false"', () => {
  expect(filterBySale(false, products)).toEqual(products);
});

test('Filter for items for only "Cider"', () => {
  expect(filterByDrinks(["Cider"], products)).toEqual(products.filter((product) => product.type === "Cider"));
});

test('Filter for items for Wine or Beer"', () => {
  expect(filterByDrinks(["Wine", "Beer"], products)).toEqual(products.filter((product) => product.type === "Wine" || product.type === "Beer"));
});

test('Filter by drinks where no drinks are specified"', () => {
  expect(filterByDrinks([], products)).toEqual(products);
});

test('Filter by price range of $20-$40"', () => {
  expect(filterByPrice(40, 20, products)).toEqual(products.filter((product) => {
    const truePrice = parseFloat(product.price.replaceAll("$", ""));
    return truePrice < 40 && truePrice > 20;
  }));
});

test('Filter by price range of where max is greater than mine"', () => {
  expect(filterByPrice(0, 100, products)).toEqual(products);
});
