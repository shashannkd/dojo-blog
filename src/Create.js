import { useState } from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
            </form>
        </div>

    );
}

export default Create;