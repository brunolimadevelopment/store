import { ReactNode } from "react";

// Styles
import * as Styles from "./styles";



const BuyButton = ({ children, startIcon, ...rest }) => {
    return (
        <Styles.BuyButton {...rest}>
            {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

            {children}
        </Styles.BuyButton>
    );
};

export default BuyButton;
