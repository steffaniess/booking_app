import React from 'react';
import './About.css'; // Importera CSS-filen för att använda stilar

const About = () => {
    return(
        <div className="about-container">
            <h2 className="about-heading">Our Story</h2>
            <p className="about-description">FellowBot was born in Stockholm, Sweden, as a spinoff from the Royal Institute of Technology (KTH), 2017. Who are we? At FellowBot, 40% of the employees have a Ph.D. and 60% hold a master degree in diverse engineering fields. Here you can find our leading commitments to <span className="about-highlight">Vision Zero</span> empowered by a series of EU & Swedish R&D projects. We are also a female-led start up tackling key societal challenges in traffic safety & infrastructure planning.</p>

            <h5 className="about-heading">Why FellowBot?</h5>
            <p className="about-description">Fellow stands for Fellow as in friend and Bot stands for Robot. Our goal is to combine robotistics with humanity, which is one of the most importent quantities in our goal to <span className="about-highlight">Vision Zero</span>.</p>

            <h5 className="about-heading">Vision Zero</h5>
            <p className="about-description">Imagine a world where no one dies from car accidents every 20 seconds. You call us dreamer, we call it: <span className="about-highlight">VISION ZERO</span>! But what is Vision Zero? For too long, we’ve considered traffic deaths and severe injuries to be inevitable side effects of modern life. While often referred to as “accidents”, the reality is that we can prevent these tragedies by taking a proactive and preventative approach that prioritizes traffic safety as a public health issue. We, at FellowBot unleash the potentials of Virtual Reality to contribute to Vision Zero: safer streets, sustainable mobility and efficient environment planning.</p>
        </div>
    );
}

export default About;
