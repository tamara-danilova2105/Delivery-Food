import Button from './Button'
import slides_one from './photo/slides_one.jfif'
import Delivery from './Delivery'
import Product from './Product'

function HomePage({ product, addToCart, chosenFood, cart }) {
    return(
        <div>
            <div className='bannerHomePage'>
                <img className='margin' src={slides_one} width='100%' alt='BEST PIZZA'/>
            </div>

            <div>
                <Button chosenFood={chosenFood}/>
                <Product product={product} addToCart={addToCart} cart={cart} />
                <Delivery/>
            </div>
        </div>
    )
}

export default HomePage