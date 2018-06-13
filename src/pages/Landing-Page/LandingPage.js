import React, { Component } from 'react';
import LandingPageContent from './content/Content';
import Header from '../../header/Header';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <LandingPageContent />
            </div>
        )
    }
}

export default LandingPage