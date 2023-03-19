import React from "react";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";
import ArticleBody from "../ArticleBody/ArticleBody";

const Article = (props) => {
  console.log(props)
  return (
    <>
      {props.children}
      <ArticleBody lang={props.lang} read={props.read} show={props.show} />
      <ArticleAuthor lang={props.lang} /> 
    </>
  );
}
  export default Article;