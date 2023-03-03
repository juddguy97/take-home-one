import { ListItem } from '../../interface/Interfaces';

interface ShoppingItemProps {
    product: ListItem;
}

/**
 * This component will take a ListItem as a prop and display
 * the data in the item card format.
 */
function ShoppingItem(props: ShoppingItemProps) {
    const { product } = props;
    return (
        <div className="item-card">
            {product.isSale && (
                <div className="item-sale">
                    <span>On Sale!</span>
                </div>
            )}
            <div className="item-image">
                <img
                    src={require(`../../assets/images/${product.productImage}`)}
                    alt=""
                />
            </div>
            <div className="item-details">
                <h3>{product.productName}</h3>
                <h4>{product.price}</h4>
            </div>
        </div>
    );
}

export default ShoppingItem;
