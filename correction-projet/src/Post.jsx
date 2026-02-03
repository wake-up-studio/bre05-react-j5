const Post = (props) => {
    return (
            <article className="article-detail">
                <span className="category">{ props.post.category }</span>
                <h2>{ props.post.title }</h2>
                <p className="date">Publié le {props.post.date}</p>
                <hr/>
                <p>
                    { props.post.content }
                </p>
            </article>
    );
}

export default Post;

// Ce code créé le html d'un article seulement, il récupère ses données depuis les props envoyés par post (pas compris d'où il les récupère)