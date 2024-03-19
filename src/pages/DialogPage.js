import React from 'react';
import TemplateWithSidebar from "../components/TemplateWithSidebar";
import ava from "../img/ava.jpg";
import {autoGrow} from "../js/script";
import Dialog from "../components/Dialog";

const user =
    {
        id: 1,
        ava: ava,
        family: "Галкина",
        name: "Аня",
        date: "18.03.2024",
        dialog: [
            {
                direction: "in",
                text: "Хуй"
            },
            {
                direction: "in",
                text: "Соси"
            },
            {
                direction: "out",
                text: "Нет ты"
            }
        ]
    }
const DialogPage = (props) => {
    const content = (
        <div className="dialog__wrapper">
            <Dialog user={user}/>
            <form className="dialog-form">
                <textarea onChange={(e)=>autoGrow(e.target)} id="dialog-form__input" rows="1" placeholder="Сообщение" className="dialog-form__input"></textarea>
                <button type="submit" className="dialog-form__btn"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </form>
        </div>
    )
    return (
        <div className="dialog">
            <TemplateWithSidebar content={content}/>
        </div>
    );
};

export default DialogPage;