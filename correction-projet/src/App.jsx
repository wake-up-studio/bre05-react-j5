import { useState } from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import './App.css'

function App() {
    const [state, setState] = useState({ page: "blog", post:null });

    function showPost(post)
    {
        let newState = { page: "post", post:post };
        setState(newState);
    }

    function backToBlog(event)
    {
        event.preventDefault();
        let newState = { page: "blog", post:null };
        setState(newState);
    }

    if(state.page === "blog")
    {
        return (
            <>
                <Blog showPost={showPost}/>
            </>
        )
    }
    else
    {
        return (
            <>
                <a href="index.html" className="back-link" onClick={backToBlog}>← Retour à l'accueil</a>
                <Post post={state.post}/>
            </>
        )
    }

}

export default App