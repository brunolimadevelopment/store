import { useSelector } from "react-redux"
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

import { IoIosCloseCircle } from "react-icons/io";


import CartItem from "../CartItem/index"
// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {

    const handleEscapeAreaClick = () => setIsVisible(false);

    const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
    const productsTotalPrice = useSelector(selectProductsTotalPrice)

    return (

        <Styles.CartContainer isVisible={isVisible}>
            <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
            <Styles.CartBar>
                <Styles.CartContent>
                    <Styles.CartTitle><p>Carrinho <span>de Compras</span></p><Styles.CartClose><IoIosCloseCircle size={48} onClick={handleEscapeAreaClick} /></Styles.CartClose></Styles.CartTitle>
                    {
                        products.map((product) => <CartItem key={product.id} product={product} />)
                    }
                </Styles.CartContent>
                <Styles.CartContentBottom>
                    <Styles.CartTotal>
                        Total: <p>R$ {productsTotalPrice}</p>
                    </Styles.CartTotal>
                    <Styles.Purchase>Finalizar Compra</Styles.Purchase>
                </Styles.CartContentBottom>
            </Styles.CartBar>
        </Styles.CartContainer>
    );
};

export default Cart;
