import React, { Component } from 'react'

export default class CardItem extends Component {
    render() {
        return (
            <div className='col-lg-6 col-xxl-4 mb-5'>
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mt-n4">
                           <i className="fa-solid fa-code" />
                        </div>
                        <h2 className="fs-4 fw-bold">Simple clean code</h2>
                        <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                    </div>

                </div>
            </div>
        )
    }
}
