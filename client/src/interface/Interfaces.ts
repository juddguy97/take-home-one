/**
 * An interface for parsing information from the JSON.
 * This interface is designed so that when the data is
 * parsed into components, it does not alter anything
 * from the JSON (ie the attribute type or value)
 */
export interface ListItem {
    index: number;
    isSale: boolean;
    price: string;
    productImage: string;
    productName: string;
    type: DrinkTypes;
}

// Creating an array of strings to store types of drinks and create a type for it
export const drinkTypes = ['Beer', 'Wine', 'Spirits', 'Cider'];
export type DrinkTypes = (typeof drinkTypes)[number];
