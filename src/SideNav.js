import React from 'react'
import "./SideNav.css"

export default function SideNav() {
    // Creation de 03 objets
    const menus = [
        {to: '/r/popular', text: "Popular"},
        {to: '/r/all', text: "All"},
        {to: '/r/random', text: "Random"}
    ];
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]
    return (
        // Barre de navigation latérale !
        <div className='sidenav'>
            {/* Logo */}
            <div className='sidenav__logo'>
                <img src="../Reddit-Logo.png" alt=''/>
            </div>  {/* Ctrl + Alt + flèche up/down pour dupliquer */}
            {/* Barre de recherche */}
            <div className='sidenav__search'>
                <input type="text" name="search" placeholder="search"/>
                <i className='fas fa-search'></i> 
            </div>
            {/* Les liens de navigation (menu et subreddit) */}
            <div className='sidenav__link'>
                <ul className="sidenav__menu">
                    {menus.map(menu => (
                        <li> <a href={menu.to}>{menu.text}</a></li>
                    ))} {/* Mapping des objets créér plus haut. menu.to= src du link; menu.text= text du lien */}
                </ul>

                <hr />

                <ul className="sidenav__subreddit">
                    {subreddits.map(subreddit => (
                        <li> <a href={`/r/${subreddit}`}>{subreddit}</a></li>
                    ))} {/* Mapping des objets créér plus haut. $subreddit= contenu de l'id mentionné; subreddit= text du lien */}
                </ul>

            </div>
            {/* This is sidenav component */}
        </div>
    )
}
