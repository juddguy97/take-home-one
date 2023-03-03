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
            {products.length > 0 ? (
                products.map((product: ListItem) => 
                    <div className='shopping-grid-item'>
                        <ShoppingItem product={product} />
                    </div>
                )
            ) : (
                <h2>No Results Found</h2>
            )}
        </div>
    );
}

export default ShoppingGrid;
