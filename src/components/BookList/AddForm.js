import React, { Component } from 'react'
import Book from './Book'
import { LuSubtitles } from 'react-icons/lu'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'



export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(event) {
        event.preventDefault()
        let { title, author, year, books } = this.state
        if (title && author && year) {
            let newBook = {
                id: books.length + 1,
                title: title,
                author: author,
                year: year
            }
            this.setState({
                books: [...this.state.books, newBook]
            })
            this.setState({
                title:'',
                author:'',
                year:''
            })
        }
    }
    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }
    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }
    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }


    render() {
        return (
            <>
                <div className='form-container'>
                    <h1>BookList Project</h1>
                    <form id="book-form" onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input type="text" id="title" className="form-control" required onChange={this.titleHandler} value={this.state.title} />
                            <label><LuSubtitles /> Title: </label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="author" className="form-control" required onChange={this.authorHandler} value={this.state.author} />
                            <label><FaUserAlt /> Author: </label>
                        </div>

                        <div className="form-group">
                            <input type="text" id="year" className="form-control" required onChange={this.yearHandler} value={this.state.year} />
                            <label><BsFillCalendarDateFill /> Year: </label>
                        </div>
                        <button type="submit" className="btn btn-warning btn-block add-btn"><BiSolidMessageSquareAdd /> Add Book</button>
                    </form>
                </div>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th> <LuSubtitles /> Title</th>
                            <th><FaUserAlt /> Author</th>
                            <th><BsFillCalendarDateFill /> Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.map(book => {
                            return <Book {...book} key={book.id} />
                        })}
                    </tbody>
                </table>

            </>
        )
    }
}
