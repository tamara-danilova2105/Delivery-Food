import { useState } from 'react'
import { data } from './data'
import Product from './Product'
import Button from './Button'
import slides_one from './photo/slides_one.jfif'
import Delivery from './Delivery'

function HomePage() {
    const [product, setProduct] = useState(data)

    const chosenFood = (category) => {
        const newFoodArray = data.filter(item => item.category === category)
        setProduct(newFoodArray)
    }


    return(
        <div>
            <div className='bannerHomePage'>
                <img src={slides_one} width='100%' alt='BEST PIZZA'/>
            </div>

            <div>
                <Button filtredFood={chosenFood} />
                <Product product={product} />
                <Delivery />
            </div>
        </div>
    )
}

export default HomePage