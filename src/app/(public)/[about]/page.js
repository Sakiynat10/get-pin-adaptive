import TrainSlider from "@/components/train-sliders";
import "./style.scss"
import Article from "@/components/article";

export default function About() {
    return(
        <>
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