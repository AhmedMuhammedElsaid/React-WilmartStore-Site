import React from 'react'
import {
    FaTrash,
    FaChevronCircleUp,FaChevronCircleDown
} from 'react-icons/fa'  
    export default function CartItem({cartItem,increment,decrement,removeItem}) {
    const {id,title,price,count,total,image}= cartItem
    console.log(price);
    
        return (
            
        <div className="row mt-5 mg-lg-0 text-capitalize text-center align-items-center">
       {/* Image */}
         <div className="col-10 mx-auto col-lg-2 pb-2">
            <img
             src={image} className="img-fluid" width="100"   
            />
         </div>   
         {/*End of Image */}

         {/* Product */}
         <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-none-lg ">Product : {title}</span>
         </div>   
            {/* end Of product */}

            {/* Price */}
         <div className="col-10 mx-auto col-lg-2 pb-2">
            <span className="d-none-lg ">Price : ${price}</span>
         </div>   
            {/*End  Price */}

            {/* Count Control */}
         <div className="col-10 mx-auto col-lg-2 pb-2">
         <div className="d-flex justify-content-center" >
            <div>
            <FaChevronCircleUp className="cart-icon text-primary"
            onClick={()=> decrement(id)}/>
            <span className="mx-3 text-muted text-title">{count}</span>
                <FaChevronCircleDown onClick={()=>increment(id)}
                    className="cart-icon text-primary"
                />
            </div>
         </div>
         </div> 
            {/*End Count Control */}

            {/* Remove Item */}
         <div className="col-10 mx-auto col-lg-2 pb-2">
           <FaTrash className=" cart-icon text-danger" 
           onClick={()=> removeItem(id)}/>
         </div>   
            {/* End Remove Item*/}

            {/* Total*/}
            <div className="col-10 col-lg-2 mx-auto"
            >
            <strong className="text-muted">
                Item Total : ${total}
            </strong>
            </div>
        </div>
    )
}
