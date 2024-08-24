"use client"
import "./style.scss"
import Checkbox from "@/components/checkbox";
import {trainerCard} from "@/data";
import TrainerCard from "@/components/trainer-card";

const TrainCards = () => {
    return (
       <>
           <div className={"trainer-filters-adv"}>
               <h2>Все объявлении</h2>
               <Checkbox/>
           </div>
           <div className={"trainer-cards"}>
               {trainerCard.map((trainer , i) => (
                   <TrainerCard key={i} trainer={trainer} />
               ))}
           </div>
       </>
   )
}

export default TrainCards;