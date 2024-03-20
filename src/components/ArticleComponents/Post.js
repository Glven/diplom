import React from 'react';
import {NavLink} from "react-router-dom";
import {FRIEND_PAGE, POST_PAGE} from "../../utils/routes/path";

const Post = (props) => {
    return (
        <div className={`post post--${props.format}`} key={props.id}>
            <div className="author">
                <div className="author__photo">
                    <img src={props.ava} alt=""/>
                </div>
                <div className="author-info">
                    <NavLink to={FRIEND_PAGE} className="author-info__name">{props.family} {props.name}</NavLink>
                    <p className="author-info__time">{props.date}</p>
                </div>
            </div>
            <div className="post__photo">
                <img src={props.photo} alt=""/>
            </div>
            <div className="post__category">
                <i className="fa fa-tag" aria-hidden="true"></i>
                <span>{props.category}</span>
            </div>
            <NavLink to={`${POST_PAGE}/${props.id}`} className="post__title">{props.title}</NavLink>
            <p className="post__text">
                {props.text}
            </p>
            <NavLink to={POST_PAGE} className="btn btn--primary post__link">Читать далее</NavLink>
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