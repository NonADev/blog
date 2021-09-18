import { Component } from "react";
import BlogService from "./BlogService";

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            author: '',
            isPending: false
        }

        this.setTitle = this.setTitle.bind(this);
        this.setAuthor = this.setAuthor.bind(this);
        this.setBody = this.setBody.bind(this);
        this.setIsPending = this.setIsPending.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    blogService = new BlogService();

    setTitle(title) {
        this.setState({
            title: title
        });
    }

    setIsPending(isPending) {
        this.setState({
            isPending: isPending
        });
    }

    setBody(body) {
        this.setState({
            body: body
        });
    }

    setAuthor(author) {
        this.setState({
            author: author
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setIsPending(true);

        const blog = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }

        this.blogService.post(blog).then((e) => {
            this.setIsPending(false);
        });
    }

    render() {
        return (
            <div className="create">
                <h2>Create a new blog</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Blog title:</label>
                    <input type="text" value={this.state.title} onChange={(e) => this.setTitle(e.target.value)} required />
                    <label>Blog body:</label>
                    <textarea required value={this.state.body} onChange={(e) => this.setBody(e.target.value)} ></textarea>
                    <label>Blog author:</label>
                    <select required value={this.state.author} onChange={(e) => this.setAuthor(e.target.value)} >
                        <option disabled></option>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    { !this.state.isPending && <button >Add Blog</button> }
                    { this.state.isPending && <button disabled >Adding Blog...</button> }
                </form>
            </div>
        )
    }
}