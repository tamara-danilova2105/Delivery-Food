function Product({product, addToCart}) {
    return(
        <div className='container'>
            {product.map(item => {
                const {id, photo, nameDish, description, price} = item
                return(
                    <div key={id} className='product'>
                        <div className='product-info'>
                            <img className="imageFood" src={photo} alt={nameDish} width='400px'/>
                            <h2 className='namefood'>{nameDish}</h2>
                            <p align="justify" className='description'>{description}</p>
                        </div>
                        <div className='price-info'>
                            <p className='price'>{price} ₽</p>
                            <button onClick={() => addToCart(id)} className='btnBasket margin'>в корзину</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product