import React from 'react';

const ProfileInformation = (props) => {
    return (
        <div className="profile-information">
            <h2 className="profile__title">Информация</h2>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="profile-information__card profile-card">
                        <h3 className="profile-card__title">Основная информаиция</h3>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Фамилия:</p>
                                    <span>Оганесян</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Имя:</p>
                                    <span>Тигран</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Отчество:</p>
                                    <span>Ваагнович</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Логин:</p>
                                    <span>gloven</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Дата рождения:</p>
                                    <span>31.12.2000</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Дата регистрации:</p>
                                    <span>20.03.2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="profile-information__card profile-card">
                        <h3 className="profile-card__title">Контактная информация</h3>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Телефон:</p>
                                    <span>+7 (929) 997-97-94</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Почта:</p>
                                    <span>t-oganesyan00@yandex.ru</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="profile-card__item">
                                    <p>Город:</p>
                                    <span>Москва</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="profile-information__more profile-more">
                        <h3 className="profile-more__title">Дополнительно</h3>
                        <div className="profile-more__item">
                            <p>Образование:</p>
                            <span>МГТУ Станкин</span>
                        </div>
                        <div className="profile-more__item">
                            <p>Ключевые навыки:</p>
                            <span>Хуй стоит, деньги есть</span>
                        </div>
                        <div className="profile-more__item">
                            <p>О себе:</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur cum debitis dolorem doloribus ducimus ea est excepturi, id ipsa iste labore minus modi nam, natus nesciunt odit sit, sunt?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInformation;