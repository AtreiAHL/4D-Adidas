import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

class InventoryPage extends React.Component {
    
    state={
        products: [{
            id: 1,
            image: '',
            type: 'Women Running',
            name: 'ULTRA BOOST 20 SHOES',
            price: 'C$ 250',
            colours: '19 Colours Available',
            cause: 'fish' 
        },
        {
            id: 2,
            image: '',
            type: 'Women Running',
            name: 'ULTRA BOOST 20 SHOES',
            price: 'C$ 250',
            colours: '19 Colours Available',
            cause: 'fish'
        },
        {
            id: 3,
            image: '',
            type: 'Running',
            name: 'ULTRA BOOST DNA PARLEY SHOE',
            price: 'C$ 300',
            colours: '2 Colours Available',
            cause: 'fish'
        },
        ],
        cart : []
    }

    addCart = (id) => {
        console.log(id);
        const addItem = this.state.products.find(item => item.id === id)
        axios.post('http://localhost:8080/', addItem)
    }

    render() {
        return(
            <div className="shop">
                <div className="shop__hero">
                    <h2 className="shop__hero-title">Adidas has done this X and Y for forests and is committed to X and Y</h2>
                    <Link to='/' className="shop__hero-causes">
                        <p>[arrow] Check other causes</p>
                    </Link>
                    <h3 className="shop__hero-items">Some items curated just for you:</h3>
                </div>
                <div className="shop__list">
                    <div className="shop__list-header">
                        <h4 className="shop__list-header-title">Saving the Trees</h4>

                    </div>
                    {this.state.products.map(item => {
                        return (
                            <div key={item.id} className="shop__card">
                                <img src={item.image} alt={item.name} className="shop__card-image"/>
                                <h4 className="shop__card-title">{item.name}</h4>
                                <p className="shop__card-type">{item.type}</p>
                                <p className="shop__card-price">{item.price}</p>
                                <p className="shop__card-colour">{item.colours}</p>
                                <p className="shop__card-cause">Cause: {item.cause}</p>
                                <button id={item.id} onClick={() => this.addCart(item.id)} className="shop__card-button">add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default InventoryPage;