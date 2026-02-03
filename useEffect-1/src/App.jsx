import { useState, useEffect} from "react";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import Buttons from "./Buttons.jsx";
import './App.css'

function App() {
    function getStateFromStorage(){
        let stateFromStorage = localStorage.getItem("state");
        let stateFromJSON = JSON.parse(stateFromStorage);
        return stateFromJSON;
        //Cette fonction récupère ce qui est stocké dans le localStorage et la transforme
        //en var js. Ensuite, la var est retournée.
    }
    
    const [state, setState] = useState(getStateFromStorage());
        //Le useState change pour devenir la fonction qui récupère et lit les données du localStorage
        
    useEffect(()=>{
        let jsonState = JSON.stringify(state);
        localStorage.setItem('state', jsonState);
        //On transforme le state en objet JSON et on l'envoie ensuite au localStorage
    }, [state]);
        //state dans ce tableau définit les moments d'activation de useEffect.
        //Ici, dès que le state est changé, le useEffect s'active
    

    function showPost(post)
    {
        let newState = { page: "post", post:post };
        setState(newState);
    }
    
    // Cette fonction change l'objet qui fait office de state, il est ensuite envoyé au handleClick de PostCard pour passer de la grille à un article seul

    function backToBlog(event)
    {
        event.preventDefault();
        let newState = { page: "blog", post:null };
        setState(newState);
    }
    // Cette fonction fonctionne comme la précédente mais permet de revenir sur la grille

    if(state.page === "blog")
    {
        return (
            <>
                <Buttons />
                <Blog showPost={showPost}/>
            </>
        )
    }
    
    // Cette condition est celle de départ de la page et demande d'afficher blog, qui est la grille de cards. Il permet aussi d'envoyer la fonction showpost à chaque carte
    
    else
    {
        return (
            <>
                <a href="index.html" className="back-link" onClick={backToBlog}>← Retour à l'accueil</a>
                <Post post={state.post}/>
            </>
        )
    }

    // Cette condition est celle depuis un article et demande d'afficher un article seul tout en envoyant la fonction BackToBlog pour permettre de revenir sur la grille grâce à un bouton

}

export default App