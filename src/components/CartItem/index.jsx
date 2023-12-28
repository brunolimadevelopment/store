import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io"
import {
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
} from "../../redux/cart/slice"
// Styles
import * as Styles from "./styles";

const CartItem = ({ product }) => {

    const dispatch = useDispatch()

    const handleRemoveClick = () => {
        dispatch(removeProduct(product.id))
    };

    const handleIncreaseClick = () => {
        dispatch(increaseProductQuantity(product.id))
    };

    const handleDecreaseClick = () => {
        dispatch(decreaseProductQuantity(product.id))
    };

    return (
        <Styles.CartItemContainer>
            <Styles.CartItemImage isValidProp={product.photo} />

            <Styles.CartItemInfo>
                <Styles.ProductName>{product.name}</Styles.ProductName>
                <Styles.CartItemQuantity>
                    <AiOutlineMinus
                        size={15}
                        onClick={handleDecreaseClick}
                        aria-label={`Decrease quantity of ${product.name}`}
                    />
                    <Styles.CartQuantity>{product.quantity}</Styles.CartQuantity>
                    <AiOutlinePlus
                        size={15}
                        onClick={handleIncreaseClick}
                        aria-label={`Increase quantity of ${product.name}`}
                    />
                </Styles.CartItemQuantity>
                <Styles.ProductPrice>R${Math.trunc(product.price)}</Styles.ProductPrice>
            </Styles.CartItemInfo>

            <Styles.RemoveButton
                onClick={handleRemoveClick}
                aria-label={`Remove ${product.name}`}
            >
                <IoIosCloseCircle size={35} />

            </Styles.RemoveButton>
        </Styles.CartItemContainer>
    );
};

export default CartItem;
