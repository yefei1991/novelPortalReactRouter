import React from "react"
import axios from 'axios';
import {Link} from 'react-router-dom';

class Chapter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chapters: [],
        };
    }
    componentDidMount() {
        axios.get(`/api/chapterList/?novelId=${this.props.match.params.bookId}`).then(res => {
            this.setState({ chapters: res.data.data.chapters });
        });
    }
    render() {
        return (
            <div style={{ padding: "20px" ,display:"flex", flexFlow: "row wrap"}}>
                {this.state.chapters.map((chapter, index) => (
                    <div key={index} style={{flex:"0 0 25%"}}>
                        <Link target="_href" to={`${this.props.match.url}/${chapter.id}`}>
                            {chapter.title}
                        </Link>
                        <br />
                    </div>
                ))}
            </div>
        );
    }
}

export default Chapter