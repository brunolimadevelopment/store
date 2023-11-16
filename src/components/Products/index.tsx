//import products from "../../data/index";
//import axios from 'axios'
import fetchProducts from '../../hooks/index'
import { useQuery } from 'react-query'

// Components
import ProductItem from "../Product-item/index";

// Styles
import * as Styles from "./styles";

const Products = () => {

    // Use o hook useQuery para buscar os dados
    const { data, error, isLoading } = useQuery('products', fetchProducts);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Ocorreu um erro: {error.message}</div>;
    }

    // Verifica se data é uma matriz antes de chamar o método map
    if (!Array.isArray(data)) {
        return <div>Nenhum dado encontrado.</div>;
    }

    return (
        <Styles.Container>
            {data.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </Styles.Container>
    );
};

export default Products;
