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
        <>
        {products.length > 0 ? <div className="shopping-grid">
             
                {products.map((product: ListItem) => (
                    <div className="shopping-grid-item">
                        <ShoppingItem product={product} />
                    </div>
                ))}
                </div>
        
             : (
                <div className='no-results'>
                    <h2>No Results Found</h2>
                    <h3>Please adjust your search terms and filters</h3>
                </div>
            )}
        </>
    );
}

export default ShoppingGrid;
