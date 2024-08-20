import {useEffect, useState} from 'react';
import axios from 'axios';
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://blog-api-6e6i.onrender.com/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching Posts: ', error));
    }, []);

    const handleDeletePost = async (id) => {
        try {
            await axios.delete(`https://blog-api-6e6i.onrender.com/posts/${id}`);
            setPosts(posts.filter(post => post._id !== id));
        } catch (error) {
            console.error('Error deleting post: ', error);
        }
    };

    return (
        <div className='container mx-auto p-4'>
            <h2 className='text-xl font-bold mb-4'>All Posts</h2>
            <div className='space-y-4'>
                {posts.map(post => (
                        <PostItem key={post._id} post={post} onDelete={handleDeletePost} />
                ))}
            </div>
        </div>
    );
};

export default PostList;