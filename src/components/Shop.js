import {useState, useEffect } from 'react';
import {API_KEY, API_URL} from '../config';
import { Preloader } from './preloader';
import {GoodsList} from './GoodsList'
import {Cart} from './Cart';
import {BasketList} from './BasketList';
import {Alert} from './Alert'

function Shop() {
	const [goods, setGoods] = useState([])
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [isBasketShow, setBasketShow] = useState(false)
	const [alertName, setAlertName] = useState('')

	const addToBasket = (item) => { //добавляем первий раз товар
		const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			}
			setOrder([...order, newItem]) // вовзращает то что у нас есть в массиве + новый объект
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem;
				}
			})
			setOrder(newOrder);
		}
		setAlertName(item.name);

	}

	const removeFromBasket = (itemId) => {
		const newOrder = order.filter(el => el.id !== itemId) // удаление элемента из корзины. Получаем айди и обновляем наш ордер
		setOrder(newOrder)
	}

	const increaseQuantity = (itemId) => {
		const newOrder = order.map(el => {
			if (el.id === itemId) {
				const newQuantity = el.quantity + 1
				return {
					...el,
					quantity: newQuantity
				}
			} else {
				return el;
			}
		})
		setOrder(newOrder);
	}
	const decreaseQuantity = (itemId) => {
		const newOrder = order.map(el => {
			if (el.id === itemId) {
				const newQuantity = el.quantity - 1
				return {
					...el,
					quantity: newQuantity >= 0 ? newQuantity : 0,
				}
			} else {
				return el;
			}
		})
		setOrder(newOrder);
	}
	const handleBasketShow = (item) => {
		setBasketShow(!isBasketShow)
	}

	const closeAlert = () => {
		setAlertName('')
	}
	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			}
		})
		.then(response => response.json())
		.then(data => {
			data.shop && setGoods(data.shop);
			setLoading(false)
		})
	}, [])

	return <main className="container content">
		<Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
		{
			loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket} />
		}
		{
			isBasketShow && <BasketList 
								order={order} 
								handleBasketShow={handleBasketShow} 
								removeFromBasket={removeFromBasket}
								increaseQuantity={increaseQuantity}
								decreaseQuantity={decreaseQuantity}/>
		}
		{	alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
	</main>
}

export {Shop};