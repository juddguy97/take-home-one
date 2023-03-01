export interface ListItem {
    index: number;
    isSale: boolean;
    price: string;
    productImage: string;
    productName: string;
    type: 'Beer' | 'Wine' | 'Spirits' | 'Cider';
}
