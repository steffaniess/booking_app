import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Ready to try the simulator?</h1>
                <h3>Meet the future of learning how to drive</h3>
                <h3>& with the goal towards your freedom!</h3>
            </header>
            <section className="home-content">
                <img src="/images/FirstPagePic.JPG" alt="First Page Pic" className="home-image" />
                <div className="home-info">
                    <p>Experience the most advanced driving simulator that helps you learn and master driving skills safely. Our simulator offers a realistic environment where you can practice driving under various conditions without any risk.</p>
                    <button className="home-button">Book a Session Now</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
