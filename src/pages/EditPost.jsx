import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from "../components/PostForm";

const EditPost = () => {
    const {id} = useParams();
    console.log(id);    
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        axios.get(`https://blog-api-6e6i.onrender.com/posts/${id}`)
        .then(response => setInitialData(response.data))
        .catch(error => console.error("Error al obtener post: ", error));
    }, [id]);

    const handleUpdatePost = (postData) => {
        axios.put(`https://blog-api-6e6i.onrender.com/posts/${id}`, postData)
        .then(response => {
            console.log("Post actualizado: ", response.data);
            navigate('/');
        })
        .catch(error => console.error("Error al actualizar post: ", error));
    };

    if (!initialData) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
            <PostForm initialData={initialData} onSubmit={handleUpdatePost} />
        </div>
    );
};

export default EditPost;