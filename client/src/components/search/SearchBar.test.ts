import { searchProducts } from './SearchBar';
import productData from '../../assets/json/shopping-data.json';
import { ListItem } from '../../interface/Interfaces';

const products = productData as ListItem[];
const answer_1 = products.filter((product) =>
    product.productName.includes('Pure Blonde')
);
const answer_3: ListItem[] = [];
const answer_4 = products.filter((product: ListItem) =>
    product.type.includes('Beer')
);
const answer_5 = products.filter((product: ListItem) =>
    product.price.includes('$4.99')
);

test('Search for existing name', () => {
    expect(searchProducts('Pure Blonde', products)).toEqual(answer_1);
});

test('Empty search returns all results', () => {
    expect(searchProducts('', products)).toEqual(products);
});

test('Search for no match', () => {
    expect(
        searchProducts('This should return an empty array', products)
    ).toEqual(answer_3);
});

test('Search by drink type', () => {
    expect(searchProducts('Beer', products)).toEqual(answer_4);
});

test('Search by price', () => {
    expect(searchProducts('$4.99', products)).toEqual(answer_5);
});
