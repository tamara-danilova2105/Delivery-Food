import { useState } from 'react'
import { dataDiscounts } from './dataDiscounts.js'
import banner from './photo/banner.jpg'

function Discounts(){

    const [discount, setDiscount] = useState(0)
    const {image, header, text} = dataDiscounts[discount]

    const previos = () => {
        setDiscount((discount => {
            discount --
            if(discount < 0) {
                return dataDiscounts.length-1
            }
            return discount
        }))
    }

    
    
    const next = () => {
        setDiscount((discount => {
            discount ++
                if(discount > dataDiscounts.length-1) {
                    discount = 0
                }
                return discount
            }))
    }

    return(
        <div className='container-discounts'>
            <div className='bannerHomePage margin'>
                <img src={banner} width='100%' alt='BEST PIZZA'/>
            </div>
            <div className='discounts-btn margin'>
                <button className='btnBasket left' onClick={previos}>Назад</button>
                <button className='btnBasket left' onClick={next}>Вперед</button>
            </div>

            <div className='discounts-block'>
                <img align="center" className='imageFood' src={image} width='350px' height='480px' alt='наши акции'/>
                <div className='discounts-text'>
                    <h2 className='discounts-header'>{header}</h2>
                    <p className='discounts-par'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Discounts