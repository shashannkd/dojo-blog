
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState('mario');
    const handleDelete = (blogId) => {
        const updatedBlogsArray = blogs.filter(blog => blog.id !== blogId)
        setBlogs(updatedBlogsArray)
    }

    useEffect(() => {
        console.log('useEffect ran')
        fetch('http://localhost:8000/blogs').then((res) => { return res.json(); }).then((data) => {
            console.log('data :>> ', data);
            setBlogs(data)
        })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
            <button onClick={() => setName('luigi')}>chnage name</button>
            <p>{name}</p>

        </div>
    );
}

export default Home;