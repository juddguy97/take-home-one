import ShoppingItem from '../item/ShoppingItem';
import { ListItem } from '../../interface/Interfaces';

interface ShoppingGridProps {
    products: ListItem[];
}

/**
 * The ShoppingGrid component takes a ListItem array
 * to pass into the ShoppingItem component. This component
 * is also in charge of
 */
function ShoppingGrid(props: ShoppingGridProps) {
    const { products } = props;
    return (
        <div className="shopping-grid">
            {products.map((product: ListItem) => (
                <ShoppingItem product={product} />
            ))}
        </div>
    );
}

export default ShoppingGrid;
