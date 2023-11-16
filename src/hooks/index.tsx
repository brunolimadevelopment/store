import api from '../data/index';

const fetchProducts = async () => {
    const response = await api.get('products', {
        params: {
            page: 1,
            rows: 8,
            sortBy: 'id',
            orderBy: 'DESC',
        },
    });
    return response.data.products; // Acesse a propriedade 'products' dos dados retornados.
};

export default fetchProducts