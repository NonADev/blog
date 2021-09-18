import { Component } from "react";
import { withRouter } from "react-router-dom";
import BlogService from "./BlogService";

class BlogDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            blog: null
        }
    }

    blogService = new BlogService();

    setBlog(blog) {
        this.setState({
            blog: blog
        })
    }

    componentDidMount() {
        this.blogService.getById(this.state.id).then((response)=>{
            this.setBlog(response);
        });
    }

    render() {
        return (
            <div className="blog-preview">
                { this.state.blog && <h2>{this.state.blog.title}</h2> }
                { this.state.blog && <h3>{this.state.blog.author}</h3> }
                { this.state.blog && <p>{this.state.blog.body}</p> }
            </div>
        )
    }
}

export default withRouter(BlogDetails);