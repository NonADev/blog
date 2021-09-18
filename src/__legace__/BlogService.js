export default class BlogService {
    url = 'http://localhost:8000/blogs';

    get() {
        return fetch(this.url).then((response)=> response.json());
    }

    getById(id) {
        return fetch(`${this.url}/${id}`).then((response)=> response.json());
    }

    post(blog) {
        return fetch(this.url, { 
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then((response) => response.json());
    }
}