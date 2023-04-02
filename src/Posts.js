import React from 'react';
import PostItem from './PostItem';
import "./Posts.css";

export default function Posts() {
    // Attributs du post reddit
    const posts = [
        {
            upvote: 547,
            image: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
            title: "Questions about new wallet",
            user: "Kaman",
            subreddit: "Electronic coins",
            comment_count: 306,
        },
        {
            upvote: 25,
            image: "https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
            title: "Questions about chatGPT",
            user: "Firmin",
            subreddit: "IA",
            comment_count: 284,
        },
        {
            upvote: 1064,
            image: "https://fastly.picsum.photos/id/184/4288/2848.jpg?hmac=l0fKWzmWf6ISTPMEm1WjRdxn35sg6U3GwZLn5lvKhTI",
            title: "A whole new world",
            user: "Matthias",
            subreddit: "Economics",
            comment_count: 165,
        },
        {
            upvote: 980,
            image: "https://fastly.picsum.photos/id/190/2048/1365.jpg?hmac=NWS1_X_JJ-Edi-9SZRhNwHyjKt1nECckxrGLS8_idjY",
            title: "Roland Garros",
            user: "Roger Federer",
            subreddit: "Tennis",
            comment_count: 836,
        },
        {
            upvote: 5452,
            image: "https://fastly.picsum.photos/id/193/3578/2451.jpg?hmac=M5yoazhwdwMa_27rC5-S50SNFvCy4Kni0wXoa6iVF0g",
            title: "Epitech Projects",
            user: "Mahsa",
            subreddit: "Education",
            comment_count: 457,
        }
    ]
    return (
        // Chargement des données de post(grace à la methode map) dans PostItem.
        <div className="posts"> 
            {posts.map(post => (
                <PostItem post={post} />
            ))} 
        </div>
    )
}
