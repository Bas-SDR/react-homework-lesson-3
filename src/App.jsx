import './App.css'
import Button from "./components/button/Button.jsx";
import Product from "./components/product/Product.jsx";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png"
import Tile from "./components/tile/Tile.jsx";

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttonText="To the collection" disabled={false}/>
                <Button buttonText="Shop all bags" disabled={false}/>
                <Button buttonText="Pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    productTag={"Best seller"}
                    productImage={bag1}
                    productText={"The handy bag"}
                    productPrice={400}
                />
                <Product
                    productTag={"Best seller"}
                    productImage={bag2}
                    productText={"The stylish bag"}
                    productPrice={250}
                />
                <Product
                    productTag={"New collection"}
                    productImage={bag3}
                    productText={"The simple bag"}
                    productPrice={300}
                />
                <Product
                    productTag={"New collection"}
                    productImage={bag4}
                    productText={"The trendy bag"}
                    productPrice={150}
                />
            </main>
            <footer>
                <Tile tileTitle={"The brand"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ex iure numquam quam vel?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ex iure numquam quam vel?</p>
                </Tile>
                <Tile tileImage={brand} imageAltTile={"The brand"}/>
                <Tile tileImage={ourStory} imageAltTile={"Our story people"}/>
                <Tile tileTitle={"Our story"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet cum eveniet excepturi illo
                        libero molestias neque nisi totam voluptas!"</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
