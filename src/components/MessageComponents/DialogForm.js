import React from 'react';
import {autoGrow} from "../../js/script";

const DialogForm = () => {
    return (
        <form className="dialog-form">
            <textarea onChange={(e)=>autoGrow(e.target)} id="dialog-form__input" rows="1" placeholder="Сообщение" className="dialog-form__input"></textarea>
            <button type="submit" className="dialog-form__btn"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
        </form>
    );
};

export default DialogForm;