import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Radio,Spin } from 'antd';

class ChapterDetail extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      chapter: {},
      page:{size:'normal',font:this.fontDic.normal},
      loading:true
    };
  }
  fontDic={'small':'10px','normal':'14px','large':'20px'}
  componentDidMount () {
    console.info(this.state.page.font)
    axios
      .get (`/api/chapterDetail?chapterId=${this.props.match.params.chapterId}`)
      .then (res => {
        this.setState ({chapter: res.data.data});
        this.setState({loading:false})
      });
  }
  subUrl (str) {
    var index = str.lastIndexOf ('/');
    str = str.substring (0, index);
    return str;
  }
  handleSizeChange=(e)=>{
    let targetValue=e.target.value
    this.setState({page:{size:targetValue,font:this.fontDic[targetValue]}})
  }
  render () {
    let prevLink = null;
    let nextLink = null;
    var oriUrl = this.subUrl (this.props.match.url);
    if (this.state.chapter.prev) {
      prevLink = (
        <Link target="_href" to={`${oriUrl}/${this.state.chapter.prev}`}>
          上一页
        </Link>
      );
    }
    if (this.state.chapter.next) {
      nextLink = (
        <Link target="_href" to={`${oriUrl}/${this.state.chapter.next}`}>
          下一页
        </Link>
      );
    }
    return (
      <Spin spinning={this.state.loading}>
        <div style={{width: '800px', margin: '0 auto', padding: '50px 0 50px 0',fontSize:this.state.page.font}}>
          <Radio.Group value={this.state.page.size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="normal">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br/><br/>
          {this.state.chapter.content}
          <div
            style={{
              width: '200px',
              margin: '20px auto 0 auto',
              textAlign: 'center'
            }}
          >
            {prevLink}{' '}{nextLink}
          </div>
        </div>
      </Spin>
    );
  }
}

export default ChapterDetail;
