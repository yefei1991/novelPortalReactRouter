import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';

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
    var rows=[]
    for(let i=0;i<this.state.books.length;i+=4){
      let arr=this.state.books.slice(i,i+4)
      var cols=[]
      for(let j=0;j<arr.length;j++){
        cols.push(
          <Col span={6}>
            <Link target="_href" to={`${this.props.match.url}/${arr[j].id}`}>
              {arr[j].name}
            </Link>
          </Col>
        )
      }
      rows.push(<Row gutter={8}>{cols}</Row>)
    }
    return (
      <div style={{padding: '20px'}}>
        {rows}
      </div>
    );
  }
}

export default Book;
