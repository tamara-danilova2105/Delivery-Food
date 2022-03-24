import { useState, useEffect } from 'react'
import cartIcon from './photo/cart.jfif'
import iconRuble from './photo/ruble.png'
import iconBox from './photo/box.png'

function Cart({cart, setCart}) {

    const [totalCount, setTotalCount] = useState()
    const [totalSum, setTotalSum] = useState()

    useEffect(() => {
        const getTotalCount = () => {
            let countTotal = cart.reduce((total, cart) => {
                return total + cart.count
            }, 0)

            let sumTotal = cart.reduce((total, cart) => {
                return total + cart.totalPrice
            }, 0)
            setTotalCount(countTotal);
            setTotalSum(sumTotal)
        }
        getTotalCount()
    }, [cart])

    const addCount = (id) => {
        const newCart = []
        cart.forEach(item => {
            if(item.id === id) {
                let countNew = item.count + 1
                let totalPrice = (item.count + 1) * item.price
                const changeCart = {...item, count: countNew, totalPrice: totalPrice}
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
                let totalPrice = (item.count - 1) * item.price
                const changeCart = {...item, count: countNew, totalPrice: totalPrice}
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
            <div className='bannerCart'>
                <h1 align="center" className='header margin'>КОРЗИНА ПОКУПОК</h1>
                <img className='cart-img' src={cartIcon} width='50%' alt='BEST PIZZA'/>
                <br></br>
                <br></br>
            </div>
            <div className='cart-block'>
                <div className='cart-basket'>
                    {cart.map(item => {
                        const {id, icon, nameDish, count, totalPrice} = item
                        return(
                            <div className="cart-item" key={id}>
                                <div className='price-count'>
                                    <div className="img-name">
                                    <img className='icon-product' src={icon} alt='иконка' width='50px' height='50px' />
                                    <h3 className="cart-name">{nameDish}</h3>
                                    </div>
                                    <button className="delete" onClick={() => deleteItem(id)}>×</button>
                                </div>
                                <hr></hr>
                                <div className='price-count'>
                                    <h3>{totalPrice} ₽</h3>
                                    <span>
                                        <button className="add-remove" onClick={() => removeCount(id)}>-</button>
                                        {count} шт.
                                        <button className="add-remove"  onClick={() => addCount(id)}>+</button>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="cart-oder">
                    <span align="center">
                        <img src={iconRuble} alt='icon-time' width='55px' height='55px'/>
                        <h3 className='total-date'>ИТОГО К ОПЛАТЕ:</h3>
                        <h3 className='cart-date'> {totalSum} ₽</h3>
                    </span>
                    <span align="center">
                        <img src={iconBox} alt='icon-time' width='55px' height='55px'/>
                        <h3 className='total-date'>ТОВАРЫ В ЗАКАЗE:</h3>
                        <h3 className='cart-date'>{totalCount} шт.</h3>
                    </span>
                    <button className='btn-oder'>ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>
        </div>
    )
}

export default Cart