import React, { Component } from 'react';
import Header from '../header';
import Footer from '../Footer/footer';
import './redmi.css'
class Redmi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Header />
                <div className='redmi'>
                    <img src='https://cdn.cnbj1.fds.api.mi-img.com/product-images/redminote9/pv.jpg' alt='大图'/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default Redmi;