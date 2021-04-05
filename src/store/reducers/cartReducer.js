// reducer: an arrow fn that receives state and action
// should return a NEW state

const cartReducer = (state = [], action) => {
    switch (action.type)
    {
        case 'ADD_PRODUCT':
            var copy = [...state];

            /**
             *  if this product id (action.payload.product.id) does not exist inside the cart
             *  then add id
             * but if it exists (there is a product on the cart with the same id),
             * then, just inscrease the quantity of the product in the cart
             * 
             * FOR each item inside copy
             *  if(action.payload.product.id === item.product.id)
             *      increase item.quantity
             *  else
             *      push the product to copy
             * 
             */

            copy.push(action.payload);
            return copy;    

        case 'REMOVE_PRODUCT':
            //here
            break;
        default:
            return state;
    };

    switch (action.type)
    {case 'ADD_ITEM_TO_CART':
        if (state.some(item => item.id === action.payload.id)) {
    // increase qty if item already exists in cart
        return state.map(item => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item));
        }
        return [...state, { ...action.payload, qty: 1 }]; // else add the new item to cart
    }

    for( i = 0; i < 6; i ++){
        if(action.payload.product.id === item.product.id){
            ...item, qty: item.qty + 1
        };

        else{
            copy.push(action.payload);
            return copy;
        };
               
    }

};

export default cartReducer; 
