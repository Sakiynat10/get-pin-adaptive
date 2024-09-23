
import "./style.scss"
import TrainCards from "@/components/trainer-cards";
import StatisticContent from "@/components/statistic-content";

const PosterPage = () => {
    return(
        <div className={"poster"}>
            <div className={"poster-content"}>
                <div className={"main-content"}>
                    {/*<div className={"tab-content"}>*/}
                        <ul className={"main-content-tab"}>
                            <li>
                                Все
                            </li>
                            <li>
                                Актуалные
                            </li>
                            <li>
                                Отклоненные
                            </li>
                            <li>
                                Черновые
                            </li>
                        </ul>
                    {/*</div>*/}
                    <div className={"main-content-context"}>
                        <TrainCards  statistic="statistic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PosterPage;