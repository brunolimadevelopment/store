import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../Cart/index";
import { HeaderContainer, HeaderWrapper, Brand, Smallbrand, CartComp } from "./styles";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import CartIcon from '../../assets/cart.svg';


const Header = () => {
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const productsCount = useSelector(selectProductsCount)

    const dispatch = useDispatch();

    const handleCartClick = () => {
        setCartIsVisible(true);
    };


    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Brand>MKS<Smallbrand>Store</Smallbrand></Brand>
                <CartComp onClick={handleCartClick}><img className="cartIcon" src={CartIcon} alt="Cart" />{productsCount}</CartComp>
                <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header