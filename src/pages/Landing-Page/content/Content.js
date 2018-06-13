import React, { Component } from 'react';
import './Content.css';
import sureshrainaimg from './sureshrainaimg.jpg';
class LandingPageContent extends Component {
    render() {
        return (
            <section>   
        <div class="img"><img src={sureshrainaimg} /></div>
        <div class='content-container'>
        <h1>Hello</h1>
        <p>I am prakash currenty involved in training being conducted by virtusa IT and Business Consulting services pvt ltd.Soon going to be an assosiate engineer in Virtusa.I have completed my U.G in panimalar Institute of Technology which is located in chennai.My programming journey starts because of my friend who forced me to do some modules in his projects.From then i love programming. My ambition is be a good game developer or developing some apps or softwares using my programming knowledge..</p>
        <p>Apart from my acadamics and workings stuffs, I love travelling long distances in buses or trains.Nothing makes me happy more than playing street cricket with my friends.Basically i am a gaming freak.Love to spend my time with my family members and my relations..I mostly like hearing songs whenever i m free.  </p>
        </div>
            </section>
        )
    }
}

export default LandingPageContent