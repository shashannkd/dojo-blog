
import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario');
    const handleDelete = (blogId) => {
        const updatedBlogsArray = blogs.filter(blog => blog.id !== blogId)
        setBlogs(updatedBlogsArray)
    }

    useEffect(() => {
        console.log('useEffect ran')
    }, [])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>chnage name</button>
            <p>{name}</p>

        </div>
    );
}

export default Home;