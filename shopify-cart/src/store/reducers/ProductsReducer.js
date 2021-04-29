const initialState = {
    products:[
        {id:1, name:'man shirt', image:'1.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:2, name:'man shirt', image:'2.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:3, name:'man shirt', image:'3.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:4, name:'man shirt', image:'4.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:5, name:'man shirt', image:'5.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:6, name:'man shirt', image:'6.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:7, name:'man shirt', image:'7.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:8, name:'man shirt', image:'8.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:9, name:'man shirt', image:'9.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
         {id:10, name:'man shirt', image:'10.jpg', price:20, discount:2, discountPrice:20 - 2 / 100 * 20, quantity:1,
         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }

    ],
    product:{}
}
const ProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case "PRODUCT":
            return {...state, product:state.products.find(product=>product.id === parseInt (action.id))}
        default:
            return state;
    }
}
export default ProductsReducer;