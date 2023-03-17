import React from "react";

function Article() {
    return (
    <div>
        <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
        </div>
        <div style={{padding: '5px', margin: '10px',border: '4px solid black'}}>
            <h2>Article description:</h2>
            <p>NVIDIA on Azure is bringing AI, networking, and high-perfomance computing to the enterprise.</p>
        </div>
        <div className="buttons-container">
            <button className="article-button">Read</button>
            <button className="article-button">Mark as read</button>
            <button className="article-button">Mark as unread</button>
        </div>
        <div className="author-container">
            <p>Author: Mike</p>
            <p>Published: 06.12.2022</p>
            <p>Theme: Video cards</p>
        </div>
    </div> 
    
    );
  }
  export default Article;