import React from 'react';
import axios from 'axios';
import heart from '../../assets/Icons/Heart.svg';
import stats from '../../assets/SavingsGroup2x.png';
import form from '../../assets/EmailMarketingForm1x.png';
import './cart.scss'

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

    render() {
        return(
            <div className="cart">
                <h2 className="cart__title">YOUR BAG</h2>
                <div className="cart__total">
                    <div className="cart__total-amount">
                        <p className="cart__total-amount-header">TOTAL [1 item]</p>
                        <p className="cart__total-amount-price">C$ 250</p>
                    </div>
                    <button className="cart__total-button">CHECKOUT</button>
                </div>
                <img src={stats} alt="" className="cart__stats"/>
                
                {this.state.cart.map(item => {
                        return (
                            <div key={item.id} className="cart__card">
                                <img src={item.image} alt={item.name} className="cart__card-image"/>
                                <div className="cart__card-text">
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
                            </div>
                        )
                    })}
                <div className="cart__promo">
                    <p className="cart__promo-text">Enter Your Promo Code</p>
                    <p className="cart__promo-icon">+</p>
                </div>
                <h3 className="cart__order">ORDER SUMMARY</h3>
                <div className="cart__order-summary">
                    <div className="cart__order-summary-item">
                        <p className="cart__order-summary-item-head">1 ITEM</p>
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
                <img src={form} alt="" className="cart__form"/>
                <button className="cart__bottom-button">CHECKOUT</button>
            </div>
        );
    }
}

export default Cart;