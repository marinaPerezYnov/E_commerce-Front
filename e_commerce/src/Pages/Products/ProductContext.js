import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState({
        ownerId: sessionStorage.getItem('ownerId'),
        nom: '',
        description: '',
        prix: 0.00,
        quantite: 0,
        status: 'Disponible',
        picture: '',
    });

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};