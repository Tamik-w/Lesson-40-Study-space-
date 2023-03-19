import React from "react";
import './style.scss'

const ArticleBody = (props) => {
    const styleChanger = (read) => {
        if(read) {
            return 'article__body ' + 'read'
        } else if (!read){
            return 'article__body '
        }
    }
    return (
        <div className={styleChanger(props.read)}>
          <h3 className="article__description">
            {!props.show && props.lang.description}
          </h3>
          <p className="article__text">
            {props.show ? props.lang.content : props.lang.preview}
          </p>
        </div>)}

export default ArticleBody;
