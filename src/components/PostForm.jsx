import { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ initialData = {}, onSubmit }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [content, setContent] = useState(initialData.content || '');
    const [category, setCategory] = useState(initialData.category || '');
    const [tags, setTags] = useState(initialData.tags ? initialData.tags.join(', ') : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            content,
            category,
            tags: tags.split(',').map(tag => tag.trim()),
        };
        onSubmit(postData);
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium'>Title</label>
                <input 
                    type='text' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <div>
                <label className='block text-sm font-medium'>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                ></textarea>
            </div>
            <div>
                <label className='block text-sm font-medium'>Category</label>
                <input 
                    type='text' 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <div>
                <label className='block text-sm font-medium'>Tags (comma separated)</label>
                <input 
                    type='text' 
                    value={tags} 
                    onChange={(e) => setTags(e.target.value)}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded-md'
            >
                Submit
            </button>
        </form>
    );
};

PostForm.propTypes = {
    initialData: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    }),
    onSubmit: PropTypes.func.isRequired,
};

export default PostForm;