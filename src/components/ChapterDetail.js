import React from "react"
import axios from 'axios';

class ChapterDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chapter: '',
        };
    }
    componentDidMount() {
        axios.get(`/api/chapterDetail?chapterId=${this.props.match.params.chapterId}`).then(res => {
            console.info(res)
            this.setState({ chapter: res.data.data.content });
        });
    }
    render() {
        return (
            <div>
                {this.state.chapter}
            </div>
        );
    }
}

export default ChapterDetail