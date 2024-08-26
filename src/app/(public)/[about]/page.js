
import TrainSlider from "@/components/train-sliders";
import "./style.scss"
import Article from "@/components/article";
import AboutMedias from "@/components/about-medias";
import AboutTrainer from "@/components/about-trainer";
import Image from "next/image";

export default function About() {
    return(
        <>
            <section id={"about-header"}>
                <div className={"about-header--content container"}>
                    <a href={"/"} className={"slide-back"}>
                        <img src="/chevron-left.svg" alt="chevronleft"/>
                        <span>Назад</span>
                    </a>
                    <AboutMedias/>
                </div>
            </section>
            <section id={"trainers-info"}>
                <div className={"trainer-time container"}>
                    <div className={"date-time"}>
                        <span>28-Декабр </span>
                        <span>|</span>
                        <span> 16:40</span>
                    </div>
                    <div className={"viewers"}>
                        <span>
                            <img src="/watcher.svg" alt="watcher"/>
                            231
                        </span>
                        <span>
                            <img src="/share.svg" alt="share"/>
                            231
                        </span>
                    </div>
                </div>
                <div className={"trainer-content container"}>
                    <div className={"trainer-titles"}>
                        <span className={"title"}>То что вам удобна  </span>
                        <span>это ux-дизайн</span>
                    </div>
                    <div className={"trainer-profession"}>
                        <span>Проектирование стартапов</span>
                        <span>start up</span>
                    </div>
                    <AboutTrainer/>
                </div>
                <div className="about-content-descriptions container">
                    <div className="desc-title">
                        <span
                            className="title-img"
                        >
                            🌟
                        </span>
                        <p>
                            <span>Погрузитесь в мир То что вам удобна это</span> <br></br> ux-дизайн  с
                            нашим увлекательным мастер-классом, где вы научитесь:
                        </p>
                    </div>
                    <ul className="desc-subtitles">
                        <li>
                            <span>-</span>
                            <div className="subtitle-img">
                                🖌️
                            </div>
                            <p>
                                {" "}
                                **[Навык 1]** или знание, которое получат участники
                            </p>
                        </li>
                        <li>
                            <span>-</span>
                            <div className="subtitle-img">

                                🖌️
                            </div>
                            <p>
                                {" "}
                                **[Навык 2]** или знание, которое получат участники
                            </p>
                        </li>
                        <li>
                            <span>-</span>
                            <div className="subtitle-img">
                                🖌️
                            </div>
                            <p>
                                {" "}
                                **[Навык 3]** или знание, которое получат участники
                            </p>
                        </li>
                    </ul>
                    <p className="speaker-description">Наш опытный инструктор <span>Khumora Alimova</span> поделится с
                        вами своими профессиональными секретами и поможет раскрыть ваш творческий потенциал.
                        Мастер-класс подходит как для новичков, так и для тех, кто уже имеет базовые знания в **[Тема
                        мастер-класса]**.</p>
                    <p className="awards-title">
                        Что вас ждет:
                    </p>
                    <ul className="awards-infos">
                        <li>
                            <span>-</span>
                            <div className="awards-img">
                                📚
                            </div>
                            <p> Интерактивные лекции и практические занятия</p>
                        </li>
                        <li>
                            <span>-</span>
                            <div className="awards-img">
                                🏅
                            </div>
                            <p> Индивидуальный подход и персональные рекомендации</p>
                        </li>
                        <li>
                            <span>-</span>
                            <div className="awards-img">
                                💬
                            </div>
                            <p> Обсуждение работ участников и разбор ошибок</p>
                        </li>
                        <li>
                            <span>-</span>
                            <div className="awards-img">
                                <Image fill src={"/medal.png"} alt="bool"/>
                            </div>
                            <p> Сертификат о прохождении мастер-класса</p>
                        </li>
                    </ul>
                    <p className="sign-title">
                        Как записаться:
                    </p>
                    <div className="sign-desc">
                        <div className="sign-img">
                            📝
                        </div>
                        <p>Количество мест ограничено, поэтому поспешите записаться! Для регистрации заполните форму на
                            нашем сайте или позвоните по телефону +998 90 000-00-00.</p>
                    </div>
                    <p className="attend-title">О стоимости участия:</p>
                    <ul className="attend-desc">
                        <li>
                            <div className="attend-img">
                                💸
                            </div>
                            <p>Раннее бронирование до 20-Имюля: [50 000] </p>
                        </li>
                        <li>
                            <div className="attend-img">
                                💸
                            </div>
                            <p>Стандартная цена: [70 000]</p>
                        </li>
                    </ul>
                    <div className="star-final">
                        <div className="star-img">
                            🌟
                        </div>
                        <p> Присоединяйтесь к нам и откройте для себя новые горизонты!</p>
                    </div>
                </div>
            </section>
            <section id={"train-sliders"}>
                <h1 className={"title container"}>Похожие объявлении</h1>
                <TrainSlider/>
            </section>
            <section id={"article"}>
                <Article/>
            </section>
        </>
    )
}