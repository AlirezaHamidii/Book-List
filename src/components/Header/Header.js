import React, { Component } from 'react'
import { ImBook } from 'react-icons/im'

export default class Header extends Component {
    render() {
        return (
            <h1 className="display-4 text-center">
                <ImBook className='book-icon' />
                <span className='header-text'> Alireza Hamidi </span> React-Js
                <span className='header-text'> Book</span>List
            </h1>
        )
    }
}
