function Product({product}) {
    return(
        <div className='container'>
            {product.map(item => {
                const {id, photo, name, description, price} = item
                return(
                    <div key={id} className='product'>
                        <div className='product-info'>
                            <img className="imageFood" src={photo} alt={name} width='400px'/>
                            <h2 className='namefood'>{name}</h2>
                            <p className='description'>{description}</p>
                        </div>
                        <div className='price-info'>
                            <p className='price'>{price} ₽</p>
                            <button className='btnBasket margin'>в корзину</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product