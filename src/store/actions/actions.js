// actions: an arrow fn that returns an object
// that contain type (desc) of action, and payload (data)

export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product, 
    };
}
