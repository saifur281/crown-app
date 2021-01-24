

export const addItemToCart = (cartItems , addItem) => {

    const existing = cartItems.find(cartItems => cartItems.id === addItem.id);


    if(existing){

        return cartItems.map(cartItem => 
            
            cartItem.id === addItem.id 
            
            ? {...cartItem, quantity : cartItem.quantity + 1}

            : cartItem
            
            
            )
    }

    return [...cartItems,{...addItem, quantity : 1}]
};



export const decreaseItemFromCart = (cartItems, decreaseItem) =>{

    const existing = cartItems.find(cartItems => cartItems.id === decreaseItem.id);


    if(existing.quantity === 1){

        return cartItems.filter(cartItems => cartItems.id !== decreaseItem.id);
    }

    if(existing){

        return cartItems.map(cartItem => cartItem.id === decreaseItem.id ? 
            
            {...cartItem, quantity : cartItem.quantity - 1 }

            : cartItem
            
            )
    }


}