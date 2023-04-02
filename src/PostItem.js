 import React from 'react'
 import "./PostItem.css"
 
 export default function PostItem(props) {
    const { title, upvote, image, user, subreddit, comment_count} = props.post
   return (
     //Chargement des données du post ()
     <div className="post">
        
        <div className="post__left">
            <i className="fas fa-caret-up"></i>
            {/* Appel ou chargement d'une donnée de l'objet posts (où est importé PostItem!) */}
            <span>{upvote}</span>
            <i className="fas fa-caret-down"></i>
        </div>
        
        <div className="post__center">
            <img src={image} alt=''/>{/* Chargement de l'image */}
        </div>

        <div className="post__right">
            <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
            <span className="post__info">
                submitted an hour ago by&nbsp; {/* &bbsp (non breaking space)= permet de faire des espaces entres 02 mots en html*/}
                <a href={`/u/${user}`}>{user}</a>
                &nbsp;to&nbsp;
                <a href={`/r/${subreddit}`}>{subreddit}</a> 
            </span>
            <p className="post__info">
                {comment_count} comments | share | save | hide | report
            </p>
        </div>
    </div>
   )
 }
 