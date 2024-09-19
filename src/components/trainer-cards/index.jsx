"use client"
import "./style.scss"
import Checkbox from "@/components/checkbox";
import {trainerCard} from "@/data";
import TrainerCard from "@/components/trainer-card";
import {Fragment} from "react";

const TrainCards = ({statistic}) => {
    return (
       <>
           <div className={"trainer-filters-adv"}>
               <h2>Все объявлении</h2>
               <Checkbox/>
           </div>
           <div className={"trainer-cards"}>
               {trainerCard.map((trainer , i) => (
                   <Fragment key={i}>
                       <TrainerCard  trainer={trainer} />
                       {statistic ?
                           <div className={"card-st"}>
                               <ul className={"train-card-statistics"}>
                                   <li>
                                       <span>Прямые записи:</span>
                                       <h3>34</h3>
                                   </li>
                                   <li>
                                       <span>Клики:</span>
                                       <h3>283</h3>
                                   </li>
                                   <li>
                                       <span>Просмотры</span>
                                       <h3>823</h3>
                                   </li>
                                   <li>
                                       <span>Поделились:</span>
                                       <h3>230</h3>
                                   </li>
                               </ul>

                           </div> : ""
                       }
                       {statistic ? <div className={"train-card-records"}>
                           <div className={"train-recorders"}>
                               <div className={"recorders-img"}>
                                   <img src="/trainer-1.png" alt="spekaer-1"/>
                                   <img src="/trainer-2.png" alt="spekaer-1"/>
                                   <img src="/trainer-1.png" alt="spekaer-1"/>
                                   <img src="/trainer-2.png" alt="spekaer-1"/>
                               </div>
                               <button>Еще +4</button>
                           </div>
                           <button className={"all-recorders"}>
                               Посмотреть все записи
                               <img src="/chevron-right.svg" alt="right"/>
                           </button>
                       </div> : ""}
                   </Fragment>
               ))}
           </div>
       </>
   )
}

export default TrainCards;