const Smallcardprops = (props) => {
    return (
        <figure>
            <a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/"
                target="_blank"><img src={props.images} alt="" /></a>
            <figcaption>
                <p>{props.productname}</p>
                <p class="grey light">{props.price}</p>
            </figcaption>
        </figure>
    )
}

export default Smallcardprops

