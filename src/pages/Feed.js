import React from 'react';
import Post from "../components/Post";
import POST1 from "../img/post.jpg";
import POST2 from "../img/post-2.jpg"

const Feed = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
                <div className="feed">
                    <Post name="Али" date="16.03.2024" photo={POST1} title="Влияние аниме на твою жизнь" text="<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi deleniti ducimus iure numquam optio, ullam voluptatem! Aperiam, beatae debitis enim illo, incidunt, minus nisi optio quam rem sapiente sequi.</span><span>Aliquid animi assumenda beatae corporis cum debitis ex facilis fugiat modi obcaecati qui quisquam sequi sunt suscipit, tempora. Consequuntur cumque hic illo iste labore molestiae molestias quisquam ratione, sed sit.</span><span>Ad, aliquam culpa cumque cupiditate debitis eaque facere harum impedit in ipsum laboriosam libero magnam, modi molestiae nisi non quia quis quisquam quod similique soluta tempora vel. Autem, eum, ex!</span><span>Atque, aut dolorem doloremque doloribus, earum error est excepturi explicabo facere, facilis illo magnam molestiae nam natus obcaecati omnis quaerat quis quod ratione repellat sapiente tenetur voluptatibus? Accusantium facilis, voluptates.</span><span>Id, labore modi? Consequatur dignissimos doloribus fuga ipsa necessitatibus non omnis sunt totam? Excepturi facere fugiat ipsa nam nemo nihil pariatur perspiciatis. At eius, ipsum iure quas repellendus repudiandae sed!</span><span>Impedit quasi quis voluptatum? Ab alias aut beatae cumque dolor, dolorem dolores ea eos, exercitationem explicabo facere fugiat ipsam iusto libero magnam mollitia non nostrum quis, saepe tempore voluptate voluptatibus.</span><span>Accusamus architecto assumenda beatae consequuntur, cumque deserunt ea facilis inventore itaque magnam nam omnis placeat, porro, quaerat quasi tempore ut voluptas! Consequuntur cupiditate earum exercitationem, laboriosam molestias officiis perferendis! Doloribus!</span><span>Animi blanditiis commodi doloremque dolorum excepturi hic tempora totam voluptatum! Ab, accusantium consectetur cupiditate dolor dolores facere fugiat fugit labore nemo, nihil officia perferendis porro quidem rem, tempora voluptas voluptates!</span><span>Deserunt enim eveniet modi officiis temporibus. Accusamus aperiam autem delectus error iusto molestias, nam nisi possimus praesentium rem repellat rerum sed similique velit vero. Cupiditate modi nihil rem repellat voluptate.</span><span>Ab amet consequatur dicta ducimus fugiat ipsa placeat quo velit voluptate. A assumenda, consectetur culpa deleniti explicabo hic id molestiae officia praesentium, quasi reprehenderit repudiandae saepe sit tenetur totam. Soluta.</span>" likes="70" dislikes="30" comments="1000" views="500" />

                    <Post name="Дим Димыч" date="18.03.2024" photo={POST2} title="Почему ты такой черт" text="quasi quis voluptatum? Ab alias aut beatae cumque dolor, dolorem dolores ea eos, exercitationem explicabo facere fugiat ipsam iusto libero magnam mollitia non nostrum quis, saepe tempore voluptate voluptatibus.</span><span>Accusamus architecto assumenda beatae consequuntur, cumque deserunt ea facilis inventore itaque magnam nam omnis placeat officiis temporibus. Accusamus aperiam autem delectus error iusto molestias, nam nisi possimus praesentium rem repellat rerum sed similique velit vero. Cupiditate modi nihil rem repellat voluptate.</span><span>Ab amet consequatur dicta ducimus fugiat ipsa placeat quo velit voluptate. A assumenda, consectetur culpa deleniti explicabo hic id molestiae officia praesentium, quasi reprehenderit repudiandae saepe sit tenetur totam. Soluta.</span>" likes="40" dislikes="60" comments="100" views="1500" />

                </div>
            </div>
        </div>
    );
};

export default Feed;