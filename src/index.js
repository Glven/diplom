import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/style.sass";
import "./js/script.js";
import ava from "./img/ava.jpg";
import POST1 from "./img/post.jpg";
import POST2 from "./img/post-2.jpg";
const posts = [
    {
        id: 1,
        ava: ava,
        family: "Гусейнов",
        name: "Али",
        date: "16.03.2024",
        category: "Твоя мать шлюха",
        photo: POST1,
        title: "Влияние аниме на твою жизнь",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deleniti ducimus iure" +
            "numquam optio, ullam voluptatem! Aperiam, beatae debitis enim illo, incidunt, minus nisi optio quam rem" +
            " sapiente sequi.Aliquid animi assumenda beatae corporis cum debitis ex facilis fugiat modi obcaecati" +
            " qui quisquam sequi sunt suscipit, tempora. Consequuntur cumque hic illo iste labore molestiae" +
            " molestias quisquam ratione, sed sit.Ad, aliquam culpa cumque cupiditate debitis eaque facere harum" +
            " impedit in ipsum laboriosam libero magnam, modi molestiae nisi non quia quis quisquam quod similique" +
            " soluta tempora vel. Autem, eum, ex! Atque, aut dolorem doloremque doloribus, earum error est excepturi" +
            " explicabo facere, facilis illo magnam molestiae nam natus obcaecati omnis quaerat quis quod ratione repellat sapiente tenetur voluptatibus? Accusantium facilis, voluptates. Id, labore modi? Consequatur dignissimos doloribus fuga ipsa necessitatibus non omnis sunt totam? Excepturi facere fugiat ipsa nam nemo nihil pariatur perspiciatis. At eius, ipsum iure quas repellendus repudiandae sed! Impedit quasi quis voluptatum? Ab alias aut beatae cumque dolor, dolorem dolores ea eos, exercitationem explicabo facere fugiat ipsam iusto libero magnam mollitia non nostrum quis, saepe tempore voluptate voluptatibusAccusamus architecto assumenda beatae consequuntur, cumque deserunt ea facilis inventore itaque magnam nam omnis placeat, porro, quaerat quasi tempore ut voluptas! Consequuntur cupiditate earum exercitationem, laboriosam molestias officiis perferendis! Doloribus Animi blanditiis commodi doloremque dolorum excepturi hic tempora totam voluptatum! Ab, accusantium consectetur cupiditate dolor dolores facere fugiat fugit labore nemo, nihil officia perferendis porro quidem rem, tempora voluptas voluptates! Deserunt enim eveniet modi officiis temporibus. Accusamus aperiam autem delectus error iusto molestias, nam nisi possimus praesentium rem repellat rerum sed similique velit vero. Cupiditate modi nihil rem repellat voluptate. Ab amet consequatur dicta ducimus fugiat ipsa placeat quo velit voluptate. A assumenda, consectetur culpa deleniti explicabo hic id molestiae officia praesentium, quasi reprehenderit repudiandae saepe sit tenetur totam. Soluta.",
        likes: 70,
        dislikes: 30,
        comments: 1000,
        views: 500
    },
    {
        id: 2,
        ava: ava,
        family: "Галкина",
        name: "Анечка",
        date: "17.03.2024",
        category: "Я сосал, меня ебали",
        photo: POST2,
        title: "Почему ты такой гей?",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deleniti ducimus iure" +
            "numquam optio, ullam voluptatem! Aperiam, beatae debitis enim illo, incidunt, minus nisi optio quam rem" +
            "  quod similique" + "nis quaerat quis quod ratione repellat sapiente tenetur voluptatibus? Accusantium" +
            " facilis, voluptates.  ipsa  omnis sunt voluptatibusAccusamus architecto assumenda beatae" +
            " consequuntur, cumque deserunt ea facili s inventore itaque magnam nam omnis placeat, porro, quaerat" +
            " quasi tempore ut voluptas! Consequuntur  cupiditate earum exercitationem, laboriosam molestias" +
            " officiis perferendis! Doloribus Animi bla nditiis commodi doloremque dolorum excepturi hic tempora" +
            " totam voluptatum! Ab, accusantium consecte tur",
        likes: 40,
        dislikes: 60,
        comments: 200,
        views: 1500
    },
]
const categories = ['Категория 1', 'Категория 2', 'Категория 3', 'Категория 4', 'Категория 5', 'Категория 6', ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts={posts} categories={categories} />
);

