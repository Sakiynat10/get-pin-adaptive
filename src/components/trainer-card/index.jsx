import {useRouter} from "next/navigation";
import "./style.scss"

const TrainerCard = ({trainer}) => {
    const router = useRouter();
    return (
        <button onClick={() => router.push(`/${trainer.id}`)} className={"trainer-card"}>
            <div className={"trainer-images"}>
                <img src="/trainer-1.png" alt="trainer-1"/>
                <img src="/trainer-2.png" alt="trainer-2"/>
            </div>
            <div className={"trainer-profession"}>
                <span>дизайн</span>
                <span>маркетинг</span>
                <span>start up</span>
            </div>
            <p className={"subtitle"}>
                {trainer.title}
            </p>
            <span className={"bottom-title"}>Дата публикации: <span> 23 Июнь 2024</span></span>
            <img className={"tag"} src="/tag.svg" alt="tag"/>
        </button>
    )
}

export default TrainerCard;