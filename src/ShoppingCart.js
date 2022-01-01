import React, {useState} from 'react'

const initialCart = [
    {id:1, title:'Product',description:'desc'},
    {id:2, title:'Product 2',description:'desc 2'}
];

export default function ShoppingCart() {
    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId)=>{
        const changedCart = cart.filter(product => product.id !== productId);
        setCart(changedCart);
    }
    const addProduct = (newProduct) => {
        newProduct.id = Date.now();

        const changedCart = [
            newProduct,
            ...cart,
        ];

        setCart(changedCart);
    }
    
    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    }
    return (
        <div>
           <button onClick={() => addProduct({ title: "Nuevo título", description: "Nueva Desc" })}>
                Add
            </button>
            {cart.map(product => (
                <div key={product.id}>
                     <button onClick={()=>deleteProduct(product.id)}>
                Delete
            </button>
            <button 
                        onClick={() => updateProduct({ id: product.id ,title: "Edit título", description: "Edit Desc" })}
                    >
                        Update
                    </button>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            ))}
            
        </div>
    )
}
