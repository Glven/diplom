import React from 'react';
import {NavLink} from "react-router-dom";
import {ARTICLE_PAGE} from "../utils/routes/path";

const Post = (props) => {
    return (
        <div className="post">
            <div className="author">
                <div className="author__photo">
                    <img src="" alt=""/>
                </div>
                <div className="author-info">
                    <h3 className="author-info__name">{props.name}</h3>
                    <span className="author-info__time">{props.date}</span>
                </div>
            </div>
            <div className="post__photo">
                <img src={props.photo} alt=""/>
            </div>
            <NavLink to={ARTICLE_PAGE} className="post__title">{props.title}</NavLink>
            <p className="post__text">
                {props.text}
            </p>
            <NavLink to={ARTICLE_PAGE} className="post__link">Читать далее</NavLink>
            <div className="post__info">
                <div className="rating">
                    <span className="rating__count rating__l">{props.likes}</span>
                    <div className="rating__scale rating__lscale"></div>
                    <div className="rating__scale rating__dscale"></div>
                    <span className="rating__count rating__d">{props.dislikes}</span>
                </div>
                <div className="coverage">
                    <div className="coverage__item">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <span>{props.comments}</span>
                    </div>
                    <div className="coverage__item">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <span>{props.views}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;