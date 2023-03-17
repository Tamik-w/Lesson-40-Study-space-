import React from "react";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";
import ArticleBody from "../ArticleBody/ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children}
    <ArticleBody show={props.show} text={props.text} />
    <ArticleAuthor /> 
    </>
    );
  }
  export default Article;

