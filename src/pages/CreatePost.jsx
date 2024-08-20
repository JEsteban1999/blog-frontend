import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PostForm from "../components/PostForm";

const CreatePost = () => {
    const navigate = useNavigate();

    const handleCreatePost = (postData) => {
        axios.post('https://blog-api-6e6i.onrender.com/posts', postData)
            .then(response => {
                console.log("Post creado: ", response.data);
                navigate('/');
            })
            .catch(error => console.error("Error al crear post: ", error));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <PostForm onSubmit={handleCreatePost} />
        </div>
    );
};

export default CreatePost;