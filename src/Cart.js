import cartIcon from './photo/cart.jfif'

function Cart({cart, setCart}) {

    const addCount = (id) => {
        const newCart = []
        cart.forEach(item => {
            if(item.id === id) {
                let countNew = item.count + 1
                const changeCart = {...item, count: countNew}
                newCart.push(changeCart)
            } else {
                newCart.push(item);
            }
        })
        setCart(newCart); 
    }

    const removeCount = (id) => {
        const newCart = []
        cart.forEach(item => {
            if(item.id === id) {
                if(item.count < 2) return
                let countNew = item.count - 1
                const changeCart = {...item, count: countNew}
                newCart.push(changeCart)
            } else {
                newCart.push(item);
            }
        })
        setCart(newCart); 
    }

    const deleteItem = (id) => {
        let newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    return(
        <div>
            <h1 align="center" className='header margin'>КОРЗИНА ПОКУПОК</h1>
            <div className='cart-block'>
                <div className='bannerHomePage margin'>
                    <img className='caer-img' src={cartIcon} width='600px' alt='BEST PIZZA'/>
                    <h2 align="center" className='header margin'>Форма заказа:</h2>

                </div>
                <div>
                    <h2 align="center" className='header margin'>Ваш закаказ:</h2>
                {cart.map(item => {
                        const {id, icon, nameDish, price, count} = item
                        return(
                            <div className="cart-item" key={id}>
                                <img className='icon-product' src={icon} alt='иконка' width='40px' height='40px' />
                                <h3 className="cart-name">{nameDish}</h3>
                                <span className="cart-count">
                                    <button className="add-remove" 
                                            onClick={() => removeCount(id)}>-</button> {count} шт.
                                    <button className="add-remove" 
                                            onClick={() => addCount(id)}>+</button></span>
                                <span className="cart-count delete-item">{count * price} ₽
                                <button className="delete" 
                                        onClick={() => deleteItem(id)}>×</button></span>
                                
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Cart