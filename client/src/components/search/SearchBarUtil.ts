import { ListItem } from "../../interface/Interfaces";

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