const Bigcardprops = (props) => {
    return (
        <figure class="rows">
            <a href="https://stefftraenkler.github.io/Project_DesignShop_mediaQueries/"
                target="_blank" rel='noopener noreferrer'><img src={props.images} alt="" /></a>
            <figcaption>
                <p>{props.productname}</p>
                <p class="grey light">{props.price}</p>
            </figcaption>
        </figure>
    )
}

export default Bigcardprops