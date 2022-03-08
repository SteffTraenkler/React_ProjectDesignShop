import Bigcardprops from "./bigCardProps"

const Bigcard = () => {
    return (
        <article>
            <Bigcardprops
                images="./images/46-Home_bm.png"
                productname={'Summer Print by Bratislav Milenovic'}
                price={"$27.00"}
            />
            <Bigcardprops
                images="./images/45-Home_hem.png"
                productname={'Palo Modular Corner Sofa by Hem'}
                price={"$3,699.00"}
            />
        </article>
    )
}

export default Bigcard