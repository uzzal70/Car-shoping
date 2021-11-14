import React, { useEffect, useState } from 'react';

const useProduct = () =>
{
    {
        const [products, setProducts] = useState([]);
        useEffect(() =>
        {
            fetch('https://enigmatic-river-03498.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data));
        }, []);
        return [products, setProducts];
    };
};

export default useProduct;