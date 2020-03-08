import React, { Component } from 'react';
import { Links } from './Links'
import { socialLinks } from './SocialLinks'
import { items } from './productData'
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: Links,
        socialIcons: socialLinks,
        cart: [],
        cartItems: 0,
        cardSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
        search: "",
        price: 0,
        min: 0,
        max: 0,
        company: "all",
        shipping: false
    };

    componentDidMount() {
        this.setProducts(items);
    }

    //Set Product method 
    setProducts = (products) => {
        let storeProducts = products.map(item => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const Product = { id, ...item.fields, image };
            return Product
        })
        // console.log(featuredProducts);

        //Featured Products at home page
        const featuredProducts = storeProducts.filter(product => product.featured === true);

        //Get Max Price
        let maxPrice = Math.max(...storeProducts.map(item => item.price));

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice

        }, () => { this.addTotals() }
        )
    }


    // Adding the item once you click over add to the basket icon
    addToCart = (id) => {
        // holding a copy of Cart property
        let tempCart = [...this.state.cart];

        // holding a copy of Products
        let tempProducts = [...this.state.storeProducts];

        // here we are trying to get out the specific product that we choiceed 
        let tempItem = tempCart.find(item => item.id === id);
        //we check if the item is not exist in the cart 
        if (!tempItem) {
            //we get the item from the product store hence the cart doesn't include it
            tempItem = tempProducts.find(item => item.id === id);
            //calculate the total 
            let total = tempItem.price;
            //setting a new item in the cart and  attach the total and the counter in order to count how many time it added
            let cartItem = { ...tempItem, count: 1, total };
            //taking a copy of the cart
            tempCart = [...tempCart, cartItem];
        } else { // in case the item is already added one time before and it's already in the cart
            //we just increase the counter by one like you added it once and you wanna add one more time or whatever you want
            tempItem.count++;
            //setting the total based on how many times you add the item to the cart like if 3 times we multiple 3x in the price
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));//to show only two nums after the comma
        }
        this.setState(
            () => { // updating cart in the states by the new one
                return { cart: tempCart };
            }, //after we update it we gonna invoke add totals , syncStorage,open cart 
            () => {
                this.addTotals();
                this.syncStorage();
                this.openCart();
            }
        );
    };

    //set Single Product
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(product =>
            product.id === id
        );
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: { ...product },
            loading: false
        })

    }
    //Get cart from Local storage
    getStorageCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
        // if (localStorage.getItem('cart')) {
        //     cart = JSON.parse(localStorage.getItem('cart'));
        // }
        // else {
        //     cart = [];
        // }
        // return cart
        return cart
    }

    //get Product from local Storage 
    getStorageProduct = () => {
        return JSON.parse(localStorage.getItem('singleProduct')) ?
            JSON.parse(localStorage.getItem('singleProduct')) : []
    }
    //get Total
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;

        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total
        };
    };

    //add Totals 
    addTotals = () => {
        //assigning the values from get totals method into the state using this method
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        });
    };
    // sync data from local storage
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    //Clear Cart
    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }


    //decrement the item number --
    decrement = (id) => {
        let tempCart = [...this.state.cart]
        let cartItem = tempCart.find(item => item.id == id);

        cartItem.count = cartItem.count - 1;
        if (cartItem.count === 0) {
            this.removeItem(id);
        }
        else {
            cartItem.total = cartItem.count * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2));
            this.setState(() => {
                return {
                    cart: [...tempCart]
                };
            }, () => {
                this.addTotals();
                this.syncStorage();
            })
        }
    }
    //Increment the item number ++
    increment = (id) => {
        let tempCart = [...this.state.cart]
        let cartItem = tempCart.find(item => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, () => {
            this.addTotals();
            this.syncStorage();
        });
    };
    //remove Item from Cart
    removeItem = (id) => {
        let tempCart = [...this.state.cart]
        let cart = tempCart.filter(item => item.id !== id);
        this.setState(() => {
            return {
                cart
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    //handle Change
    handleChange = event => {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        this.setState(
            {
                [name]: value
            },
            this.sortData
        );
    };
    sortData = () => {
        const { storeProducts, price, company, shipping, search } = this.state;

        let tempPrice = parseInt(price);

        let tempProducts = [...storeProducts];
        // filtering based on price
        tempProducts = tempProducts.filter(item => item.price <= tempPrice);
        // filtering based on company
        if (company !== "all") {
            tempProducts = tempProducts.filter(item => item.company === company);
        }
        if (shipping) {
            tempProducts = tempProducts.filter(item => item.freeShipping === true);
        }
        if (search.length > 0) {
            tempProducts = tempProducts.filter(item => {
                let tempSearch = search.toLowerCase();
                let tempTitle = item.title.toLowerCase().slice(0, search.length);
                if (tempSearch === tempTitle) {
                    return item;
                }
            });
        }
        this.setState({
            filteredProducts: tempProducts
        });
    };

    //handle sidebar 
    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }
    //handle Cart 
    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen })
    }
    //Close Cart
    closeCart = () => {
        this.setState({ cartOpen: false })
    }
    //open Cart
    openCart = () => {
        this.setState({ cartOpen: true })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    openCart: this.openCart,
                    closeCart: this.closeCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct,
                    clearCart: this.clearCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    handleChange: this.handleChange
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

