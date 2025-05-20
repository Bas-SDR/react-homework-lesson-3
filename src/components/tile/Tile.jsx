import './Tile.css';

// eslint-disable-next-line react/prop-types
function Tile({tileImage, tileTitle, imageAltTile, children}) {
    console.log(children)
    return (
        <section>
            <img src={tileImage} alt={imageAltTile}/>
            <h2>{tileTitle}</h2>
            {children}
        </section>
    );
}

export default Tile;