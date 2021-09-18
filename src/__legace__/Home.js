import { Component } from "react";
import BlogList from "./BlogList";
import BlogService from "./BlogService";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: null,
            blogsPending: true,
            error: null
        }
    }

    blogService = new BlogService();

    setBlogs(blogs) {
        this.setState({
            blogs: blogs,
            blogsPending: false
        });
    }

    setError(errorMessage) {
        this.setState({
            error: errorMessage,
            blogsPending: false
        });
    }

    componentDidMount() {
        this.blogService.get().then((data) => {
            this.setBlogs(data);
            this.setError(null);
        });
    }

    render() {
        return (
        <div className="home">
            {this.state.error && <div>{this.state.error}</div>}
            {this.state.blogsPending && <div>Loading...</div>}
            {this.state.blogs && <BlogList blogs={this.state.blogs} title="All blogs!" />}
        </div>
        );
    }
}