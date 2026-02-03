import PostCard from "./PostCard.jsx";
import data from "./Data.js";

const Blog = (props) => {
    return (
        <div className="blog-grid">
            {
                data.map((post, index) =>
                    <PostCard key={index} post={post} showPost={props.showPost}/>
                    // Ici, post={post} permet d'envoyer les données de post (dans la boucle) vers postCard. Cela évite d efaire title={post.title} etc. pour chacune des données
                )
            }
        </div>
    );
}

export default Blog;

// Ce code créé la grille de cartes en parcourant un tableau et en envoyant les infos nécessaires à postcard via les props