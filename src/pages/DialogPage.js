import React from 'react';
import ava from "../img/ava.jpg";
import Dialog from "../components/MessageComponents/Dialog";
import Sidebar from "../components/NavigationComponents/Sidebar";
import DialogForm from "../components/MessageComponents/DialogForm";

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
    return (
        <div className="row justify-content-center justify-content-lg-start">
            <Sidebar/>
            <div className="col-12 col-md-9 col-lg-8">
                <div className="dialog">
                    <div className="dialog__wrapper">
                        <Dialog user={user}/>
                        <DialogForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogPage;