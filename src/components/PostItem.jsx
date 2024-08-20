import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


const PostItem = ({post, onDelete}) => {
    const handleDeletePost = async () => {
        onDelete(post._id);
    }
    return (
        <div className='border p-4 rounded-lg shadow'>
            <h3 className='text-lg font-bold'>{post.title}</h3>
            <p className='text-gray-700'>{post.content}</p>
            <div className='flex justify-between items-center mt-2'>
                <Link to={`/edit-post/${post._id}`} className="text-blue-500 hover:bg-blue-500 hover:text-white rounded px-4 py-2">Edit</Link>
                <button onClick={handleDeletePost} className='text-red-500 hover:bg-red-500 hover:text-white rounded px-4 py-2'>Delete</button>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
    }).isRequired,
};

export default PostItem;