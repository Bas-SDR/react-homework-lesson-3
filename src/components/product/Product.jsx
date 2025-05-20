import './Product.css';

// eslint-disable-next-line react/prop-types
function Product({productTag, productImage, productText, productPrice}) {
    return (
        <article>
            <span>{productTag}</span>
            <img src={productImage} alt={productText}/>
            <p>{productText}</p>
            <h4>€{productPrice},-</h4>
        </article>
    );
}

export default Product;