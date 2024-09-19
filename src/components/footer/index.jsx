import "./style.scss"

const footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <a href="/">Getpin</a>
                <span>Собирайся, учись, развивайся – всё в одном месте!</span>
            </div>
            <div className={"footer-medias"}>
                <div className={"medias"}>
                    <a href="/">
                        <img src="/media-1.svg" alt="media-1"/>
                    </a>
                    <a href="/">
                        <img src="/media-2.svg" alt="media-1"/>
                    </a>
                    <a href="/">
                        <img src="/media-3.svg" alt="media-1"/>
                    </a>
                    <a href="/">
                        <img src="/media-4.svg" alt="media-1"/>
                    </a>
                </div>
                <div className={"media-infos"}>
                    <div className={"info-top"}>
                        <span>Наш телефон:</span>
                        <h3>+998 90 000-00-00</h3>
                    </div>
                    <div className={"info-bottom"}>
                        <span>Электронная почта:</span>
                        <h3>info@gmail.com</h3>
                    </div>
                </div>
            </div>
            <p>Наша платформа предоставляет уникальную возможность организаторам мероприятий быстро и эффективно привлекать аудиторию. Здесь вы можете разместить свои объявления о предстоящих мероприятиях, мастер-классах и семинарах, привлекая внимание потенциальных участников.</p>
            <p className={"subtitle"}>Пользователи обязаны соблюдать правила пользования сайтом. Размещение объявлений бесплатно с учетом условий использования.</p>
            <div className={"footer-bottom"}>
                <span>Copyright @ 2024</span>
                <span>Terms of Use</span>
                <span>Privacy policy</span>
            </div>
        </footer>
    )
}

export default footer;