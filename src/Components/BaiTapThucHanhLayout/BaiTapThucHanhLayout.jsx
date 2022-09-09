import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Item from '../Item/Item';


class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Item/>
                <Footer/>
            </div>
        );
    }
}

export default BaiTapThucHanhLayout;