const PostCard = (props) => {

    function handleClick(event)
    {
        event.preventDefault();
        props.showPost(props.post);
    }

// Cette fonction est celle qui déclare l'event click, une fonction est récupérée depuis app

    return (
        <article className="card">
            <span className="category">{ props.post.category }</span>
            <h3>{ props.post.title }</h3>
            <p className="date">{ props.post.date }</p>
            <p>{ props.post.excerpt }</p>
            <a href="article.html" className="btn" onClick={handleClick}>Lire la suite →</a>
        </article>
    );
}

// Ce code génere une seule et unique carte, elle récupère ses infos donnés par blog dans les props

export default PostCard;