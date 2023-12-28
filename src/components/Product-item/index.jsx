import { FiShoppingBag } from "react-icons/fi";
import BuyButton from "../Button/index";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice"

// Styles
import * as Styles from "./styles";

const ProductItem = ({ product }) => {

    const dispatch = useDispatch()
    const handleProductClick = () => {
        dispatch(addProduct(product))
    }

    return (
        <Styles.ProductContainer>
            <Styles.ProductImage isValidProp={product.photo} />
            <Styles.ProductInfo>
                <Styles.ProductName>{product.name}</Styles.ProductName>
                <Styles.ProductPrice>R${Math.trunc(product.price)}</Styles.ProductPrice>
            </Styles.ProductInfo>
            <Styles.ProductDescription>{product.description}</Styles.ProductDescription>
            <BuyButton startIcon={<FiShoppingBag />} onClick={handleProductClick}>
                Comprar
            </BuyButton>
        </Styles.ProductContainer>
    );
};

export default ProductItem;