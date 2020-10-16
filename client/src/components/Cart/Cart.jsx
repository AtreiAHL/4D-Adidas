import React from 'react';
import axios from 'axios';
import heart from '../../assets/Icons/Heart.svg';

class Cart extends React.Component {

    state = {
        cart: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/')
            .then((res) => {
                this.setState({cart: res.data})
            })
    }

    // addCart = (id) => {
    //     console.log(id);
    //     const addItem = this.state.products.find(item => item.id === id)
    //     axios.post('http://localhost:8080/', addItem)
    // }

    render() {
        return(
            <div className="cart">
                <h2 className="cart__title">Your Bag</h2>
                <div className="cart__total">
                    <div className="cart__total-amount">
                        <p className="cart__total-header">Total (1 item)</p>
                        <p className="cart__total-price">C$ 250</p>
                    </div>
                    <button className="cart__card-button">Checkout --></button>
                </div>
                
                {this.state.cart.map(item => {
                        return (
                            <div key={item.id} className="cart__card">
                                <img src={item.image} alt={item.name} className="cart__card-image"/>
                                <div className="cart__card-info">
                                    <div className="cart__cart-info-basics">
                                        <h4 className="cart__card-info-basics-title">{item.name}</h4>
                                        <p className="cart__card-info-basics-size">SIZE: 7</p>
                                        <p className="cart__card-info-basics-stock">LOW IN STOCK</p>
                                    </div>
                                    <div className="cart__card-icons">
                                        <img src={heart} alt="" className="cart__card-icons-img"/>
                                        <img src="" alt="" className="cart__card-icons-img"/>
                                    </div>
                                </div>
                                <div className="cart__card-price">
                                    <p className="cart__card-price-amount">C$ {item.price}</p>
                                    <p className="cart__card-price-quantity">Qty: 1</p>
                                    <img src="" alt="" className="cart__card-price-image"/>
                                </div>
                            </div>
                        )
                    })}
                <div className="cart__promo">
                    <p className="cart__promo-text">Enter Your Promo Code</p>
                    <img src="" alt="" className="cart__promo-icon"/>
                </div>
                <h3 className="cart__order">Order Summary</h3>
                <div className="cart__order-summary">
                    <div className="cart__order-summary-item">
                        <p className="cart__order-summary-item-head">1 Item</p>
                        <p className="cart__order-summary-item-price">C$ 250.00</p>
                    </div>
                    <div className="cart__order-summary-item">
                        <p className="cart__order-summary-item-head">DELIVERY</p>
                        <p className="cart__order-summary-item-price">FREE</p>
                    </div>
                    <div className="cart__order-summary-item">
                        <p className="cart__order-summary-item-head">Sales Tax</p>
                        <p className="cart__order-summary-item-price"> - </p>
                    </div>
                    <div className="cart__order-summary-item">
                        <p className="cart__order-summary-item-head">TOTAL</p>
                        <p className="cart__order-summary-item-price">C$ 250.00</p>
                    </div>
                </div>
                <button className="cart__card-button">Checkout --></button>
            </div>
        );
    }
}

export default Cart;