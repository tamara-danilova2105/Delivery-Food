import zone from './photo/zone.jpg'

function Delivery() {
    return(
        <div className='delivery-info'>
            <div className='delivery-block'>
                <p className='red'>Доставка за 30 минут!</p>
                <p>Если мы не успеем доставить заказ в течение 60 минут, то вы получите его БЕСПЛАТНО!</p>
                <p>Изображения товаров на сайте может отличаться от товаров в заказе.</p>
                <p>Прием заказов на сайте - 08:30 до 23:00. Доставка - 09:00 до 24:00. </p>
            </div>

            <div className='delivery-block'>
                <p className='red'>Доставка бесплатно!</p>
                <p>500 руб - минимальная сумма доставки.</p>
                <p>Доставка осуществляется бесплатно.</p> 
                <p>Заказ можно оплатить онлайн на сайте, банковской картой курьеру или наличными.</p>
            </div>

            <div className='delivery-block'>
                <p className='red'>Зона доставки:</p>
                <img className='imageZone' src={zone} width='350px' alt='Зона доставка'/>
            </div>
        </div>
    )
}

export default Delivery