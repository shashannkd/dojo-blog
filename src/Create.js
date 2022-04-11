import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true)
        console.log('posting blog...');
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added', blog.title)
            setIsPending(false)
            history.push('/');
        }
        )
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blog-title">Blog title:</label>
                <input type="text" name="blog-title" id="blog-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} required />
                <label htmlFor="blog-body">Blog body:</label>
                <textarea name="blog-body" id="blog-body" value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required>
                </textarea>
                <label htmlFor="blog-author">Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    name="blog-author" id="blog-author">
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Posting your Blog...</button>}
            </form>
        </div>

    );
}

export default Create;