import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <a href="/">
                Go back to All Blogs
            </a>
        </div>);
}

export default BlogDetails;