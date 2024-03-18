import React from 'react';
import Post from "../components/Post";
import ava from "../img/ava.jpg";
import POST1 from "../img/post.jpg";
import POST2 from "../img/post-2.jpg";
import CategorySidebar from "../components/CategorySidebar";
import Navigation from "../components/Navigation";

const categories = ['Категория 1', 'Категория 2', 'Категория 3', 'Категория 4', 'Категория 5', 'Категория 6', ];


const ArticlePage = () => {
    return (
        <section className="articles">
            <div className="row">
                <form className="col-12 col-md-8 col-lg-9">
                    <div className="articles-search">
                        <input id="article-search" type="text" placeholder="Найти" className="articles-search__input" onChange={clearShow}/>
                        <button type="submit" className="articles-search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        <span className="articles-search__clear" onClick={clearInput}><i className="fa fa-times" aria-hidden="true"></i></span>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 col-lg-9 col-lg-8 order-1 order-md-0">
                    <Post name="Али" ava={ava} date="16.03.2024" category="Твоя мать шлюха" photo={POST1} title="Влияние аниме на твою жизнь" text="<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deleniti ducimus iure numquam optio, ullam voluptatem! Aperiam, beatae debitis enim illo, incidunt, minus nisi optio quam rem sapiente sequi.</span><span>Aliquid animi assumenda beatae corporis cum debitis ex facilis fugiat modi obcaecati qui quisquam sequi sunt suscipit, tempora. Consequuntur cumque hic illo iste labore molestiae molestias quisquam ratione, sed sit.</span><span>Ad, aliquam culpa cumque cupiditate debitis eaque facere harum impedit in ipsum laboriosam libero magnam, modi molestiae nisi non quia quis quisquam quod similique soluta tempora vel. Autem, eum, ex!</span><span>Atque, aut dolorem doloremque doloribus, earum error est excepturi explicabo facere, facilis illo magnam molestiae nam natus obcaecati omnis quaerat quis quod ratione repellat sapiente tenetur voluptatibus? Accusantium facilis, voluptates.</span><span>Id, labore modi? Consequatur dignissimos doloribus fuga ipsa necessitatibus non omnis sunt totam? Excepturi facere fugiat ipsa nam nemo nihil pariatur perspiciatis. At eius, ipsum iure quas repellendus repudiandae sed!</span><span>Impedit quasi quis voluptatum? Ab alias aut beatae cumque dolor, dolorem dolores ea eos, exercitationem explicabo facere fugiat ipsam iusto libero magnam mollitia non nostrum quis, saepe tempore voluptate voluptatibus.</span><span>Accusamus architecto assumenda beatae consequuntur, cumque deserunt ea facilis inventore itaque magnam nam omnis placeat, porro, quaerat quasi tempore ut voluptas! Consequuntur cupiditate earum exercitationem, laboriosam molestias officiis perferendis! Doloribus!</span><span>Animi blanditiis commodi doloremque dolorum excepturi hic tempora totam voluptatum! Ab, accusantium consectetur cupiditate dolor dolores facere fugiat fugit labore nemo, nihil officia perferendis porro quidem rem, tempora voluptas voluptates!</span><span>Deserunt enim eveniet modi officiis temporibus. Accusamus aperiam autem delectus error iusto molestias, nam nisi possimus praesentium rem repellat rerum sed similique velit vero. Cupiditate modi nihil rem repellat voluptate.</span><span>Ab amet consequatur dicta ducimus fugiat ipsa placeat quo velit voluptate. A assumenda, consectetur culpa deleniti explicabo hic id molestiae officia praesentium, quasi reprehenderit repudiandae saepe sit tenetur totam. Soluta.</span>" likes="70" dislikes="30" comments="1000" views="500" />

                    <Post name="Дим Димыч" ava={ava} category="Нет твоя" date="18.03.2024" photo={POST2} title="Почему ты такой черт" text="quasi quis voluptatum? Ab alias aut beatae cumque dolor, dolorem dolores ea eos, exercitationem explicabo facere fugiat ipsam iusto libero magnam mollitia non nostrum quis, saepe tempore voluptate voluptatibus.</span><span>Accusamus architecto assumenda beatae consequuntur, cumque deserunt ea facilis inventore itaque magnam nam omnis placeat officiis temporibus. Accusamus aperiam autem delectus error iusto molestias, nam nisi possimus praesentium rem repellat rerum sed similique velit vero. Cupiditate modi nihil rem repellat voluptate.</span><span>Ab amet consequatur dicta ducimus fugiat ipsa placeat quo velit voluptate. A assumenda, consectetur culpa deleniti explicabo hic id molestiae officia praesentium, quasi reprehenderit repudiandae saepe sit tenetur totam. Soluta.</span>" likes="40" dislikes="60" comments="100" views="1500" />
                </div>
                <div className="col-12 col-md-4 col-lg-3 order-0 order-md-1">
                    <CategorySidebar icon="tag" title="Категории" categories={categories}/>
                </div>
                <div className="pagination order-2">
                    <span className="pagination__item">1</span><span className="pagination__item">2</span><span
                    className="pagination__item">3</span><span className="pagination__item">4</span><span
                    className="pagination__item">5</span>
                </div>
            </div>
            <Navigation/>
        </section>
    );
};

const clearShow = () => {
    const searchInput = document.getElementById('article-search');
    const clearBtn = document.querySelector('.articles-search__clear');
    if(searchInput.value!==""){
        clearBtn.classList.add('articles-search__clear--active');
    }
    else{
        clearBtn.classList.remove('articles-search__clear--active');
    }
}
const clearInput = () => {
    const searchInput = document.getElementById('article-search');
    const clearBtn = document.querySelector('.articles-search__clear');
    searchInput.value = "";
    clearBtn.classList.remove('articles-search__clear--active');
}
export default ArticlePage;