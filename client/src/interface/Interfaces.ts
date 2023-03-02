export interface ListItem {
    index: number;
    isSale: boolean;
    price: string;
    productImage: string;
    productName: string;
    type: DrinkTypes;
}

export const drinkTypes = ['Beer', 'Wine', 'Spirits', 'Cider'];
export type DrinkTypes = (typeof drinkTypes)[number];
