import { ListItem } from '../../interface/Interfaces';

interface ShoppingItemProps {
    product: ListItem;
}

function ShoppingItem(props: ShoppingItemProps) {
    const { product } = props;
    return (
        <div className="item-card">
            {product.isSale && <div className='item-sale'><span>On Sale!</span></div>}
            <div className='item-image'>
                <img
                    src={require(`../../assets/images/${product.productImage}`)}
                    alt=""
                />
            </div>
            <div className='item-details'>
                <h1>{product.productName}</h1>
                <h2>{product.price}</h2>
            </div>
        </div>
    );
}

export default ShoppingItem;
