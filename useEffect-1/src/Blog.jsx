import { useState, useEffect } from 'react';
import PostCard from "./PostCard.jsx";
import data from "./Data.js";

const Blog = (props) => {
    const [getData, setGetData] = useState([]);
    
    useEffect(() => {
        setGetData(data);
        return () => {
            getData;
        };
        //Je dis à mon composant, via useEffect, de récupérer les données de data,
        //et pour sortir de ce useEffect je lui demande de retourner
    }, []);
        //Je mets un array vide pour préciser que ce useEffect ne se réalise qu'au
        //moment où mon composant est utilisé pour la première fois
    
    return (
        <div className="blog-grid">
            {
                getData.map((post, index) =>
                    <PostCard key={index} post={post} showPost={props.showPost}/>
                )
                /*data.map devient getData.map comme les datas sont stockés dans le state de blog*/
            }
        </div>
    );
}

export default Blog;