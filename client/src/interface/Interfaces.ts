export interface ListItem {
    index: number;
    isSale: boolean;
    price: string;
    productImage: string;
    productName: string;
    type: DrinkTypes
}

export enum DrinkTypes {'Beer', 'Wine', 'Spirits', 'Cider'};
