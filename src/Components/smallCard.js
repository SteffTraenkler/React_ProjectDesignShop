import Smallcardprops from "./smallCardProps"

const Smallcard = () => {
    return (
        <article>
            <Smallcardprops
                images="./images/01-Home.png"
                productname={'Vita Copenhagen 20 Loudspeaker'}
                price={"$799.00"}
            />
            <Smallcardprops
                images="./images/29-Lifestyle_b-o.png"
                productname={'Bang & Olufsen Wireless Headphones'}
                price={"$174.00"}
            />
            <Smallcardprops
                images="./images/01-Books.png"
                productname={'Poketo: Creative Spaces'}
                price={"$25.00"}
            />
            <Smallcardprops
                images="./images/02-Lifestyle.png"
                productname={'Ucon Acrobatics Hajo Backpack'}
                price={"$79.00"}
            />
        </article>
    )
}

export default Smallcard