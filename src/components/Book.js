import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Book extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      books: [],
    };
  }
  componentDidMount () {
    axios.get ('/api/bookList').then (res => {
      this.setState ({books: res.data.data});
    });
  }
  render () {
    return (
      <div style={{padding: '20px'}}>
        {this.state.books.map ((book, index) => (
          <div key={index}>
            <Link target="_href" to={`${this.props.match.url}/${book.id}`}>
              {book.name}
            </Link>
            <br/>
          </div>
        ))}
      </div>
    );
  }
}

export default Book;
