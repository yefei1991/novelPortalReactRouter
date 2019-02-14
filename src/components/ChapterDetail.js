import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ChapterDetail extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      chapter: {},
    };
  }
  componentDidMount () {
    axios
      .get (`/api/chapterDetail?chapterId=${this.props.match.params.chapterId}`)
      .then (res => {
        console.info (res);
        this.setState ({chapter: res.data.data});
      });
  }
  subUrl(str){
    var index = str .lastIndexOf("\/")
    str  = str .substring(0, index)
    return str
  }
  render () {
    let prevLink=null
    let nextLink=null
    var oriUrl=this.subUrl(this.props.match.url);
    if(this.state.chapter.prev){
        prevLink=<Link target="_href" to={`${oriUrl}/${this.state.chapter.prev}`}>上一页</Link>
    }
    if(this.state.chapter.next){
        nextLink=<Link target="_href" to={`${oriUrl}/${this.state.chapter.next}`}>下一页</Link>
    }
    return (
      <div style={{width: '800px', margin: '0 auto', padding: '50px 0 50px 0'}}>
        {this.state.chapter.content}
        <div
          style={{
            width: '200px',
            margin: '20px auto 0 auto',
            textAlign: 'center',
          }}
        >
        {prevLink}{" "}{nextLink}
        </div>
      </div>
    );
  }
}

export default ChapterDetail;
