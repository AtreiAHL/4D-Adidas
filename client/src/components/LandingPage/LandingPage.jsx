import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.scss';
import whiteLogo from '../../assets/white_logo.svg';

function LandingPage() {
    return(
        <div className="landing">
            <div className="landing__hero">
                <img src={whiteLogo} alt="" className="landing__hero-logo"/>
                <h1 className="landing__hero-title">Conscious. Sustainable. Responsible.</h1>
                <h2 className="landing__hero-blurb">I care about...</h2>
                <form name='form' className="landing__hero-form">
                    <select name='select' id="" className="landing__hero-form-select">
                        <option value="" className="landing__hero-form-select-options">Saving water resources</option>
                        <option value="" className="landing__hero-form-select-options">Plastic</option>
                        <option value="" className="landing__hero-form-select-options">Fish</option>
                        <option value="" className="landing__hero-form-select-options">Trees</option>
                    </select>
                    <Link to='/shop' className="landing__hero-form-link">
                        <button className="landing__hero-form-link-button">click here</button>
                    </Link>                    
                </form>
                <h3 className="landing__hero-initiatives">Learn about our initiatives</h3>
            </div>
            <div className="landing__info">
                <h2 className="landing__info-title">Water</h2>
                <p className="landing__info-blurb">Our products use 30% less water to produce than major sports brands</p>
                <button className="landing__info-button">click me</button>
            </div>
            <div className="landing__info">
                <h2 className="landing__info-title">Plastic</h2>
                <p className="landing__info-blurb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perspiciatis numquam sit, laudantium odio dolor quasi aliquid perferendis soluta sapiente expedita nulla vel omnis labore ducimus qui natus accusamus rerum.</p>
                <button className="landing__info-button">click me</button>
            </div>
            <div className="landing__info">
                <h2 className="landing__info-title">Water</h2>
                <p className="landing__info-blurb">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perspiciatis numquam sit, laudantium odio dolor quasi aliquid perferendis soluta sapiente expedita nulla vel omnis labore ducimus qui natus accusamus rerum.</p>
                <button className="landing__info-button">click me</button>
            </div>
        </div>
    );
}

export default LandingPage;