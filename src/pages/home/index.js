import React, { Component } from 'react'
import Header from '../../components/header'
import Middle from '../../components/middle/middle'
import Footer from '../../components/Footer/footer'



class Home extends Component {
    render() {
        return (
            <div className="P-home">
                {/*const { children } = this.props;*/}
                <Header />
                <Middle />

                <Footer />
                
            </div>
        )
    }
}

export default Home

