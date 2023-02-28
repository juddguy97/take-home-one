import ShoppingItem from '../item/ShoppingItem';
import { ListItem } from '../../interface/Interfaces';

interface ShoppingGridProps {
    products: ListItem[];
}

function ShoppingGrid(props: ShoppingGridProps) {
    const { products } = props;
    return (
        <div className='shopping-grid'>
            {products.map((product: ListItem) => <ShoppingItem product={product} /> )}
        </div>
    );
}

export default ShoppingGrid;
