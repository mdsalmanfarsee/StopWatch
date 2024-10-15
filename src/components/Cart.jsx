import React, { useState } from 'react'
import './Cart.css'
const Cart = ({ products }) => {
    const { id, name, price, images } = products;
    const [selectedItem, setSelectedItem] = useState(images[0].url);
    const colorChaneHandler = (url) => {
        setSelectedItem(url);
    }
    return (
        <div className='product-card' product-id={id}>
            <div className="card-container">
                <div className="product-btn cart" data-tooltip="Add to Cart"></div>
                <div className="product-btn fav" data-tooltip="Add to whishlist"></div>
                <div className="product-image">
                    <img src={images[0].url} alt={name} />
                </div>
            </div>
            <div className="card-description">
                <div className="product-name">${name}</div>
                <div className="product-price">${price}</div>
            </div>
            <div className="card-button">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`product-card-btn ${selectedItem === image.url ? 'selected' : ''}`}
                        onClick={() => colorChaneHandler(image.url)}
                    >
                        <span style={{ backgroundColor: image.color }}></span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Cart;