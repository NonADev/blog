import { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogList extends Component {
    render() {
        return (
        <div className="blog-list">
            <h2>{ this.props.title }</h2>
            {this.props.blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
        );
    }
}