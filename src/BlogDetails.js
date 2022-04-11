import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete this Blog</button>
                    <div>
                        <a id="go-to-home-page" href="/">
                            Go back to Home Page
                        </a>
                    </div>
                </article>
            )}
        </div>);
}

export default BlogDetails;