import React from 'react'
import CartTotal from './CartTotal'
import CartList from './CartList'
import CartColumns from './CartColumns'
import Title from '../Title'

export default function Cart() {
    return (
       <section className="py-5">
       <div className="container">
       {/*Title*/}
    <Title title="Your Cart Items" center/>
    </div>
       {/*Cart Columns*/}
    <CartColumns/>
       {/*cart List*/}
    <CartList/>
       {/*cart Total*/}

    <CartTotal/>
    </section>
    )
}
