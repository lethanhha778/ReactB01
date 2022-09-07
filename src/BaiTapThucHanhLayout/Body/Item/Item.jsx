import React, { Component } from 'react'
import CardItem from './CardItem/CardItem'

export default class Item extends Component {
    render() {
        return (
            <div className='pt-4'>
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </div>
                </div>
            </div>
        )
    }
}
