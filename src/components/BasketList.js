import {BasketItem} from './BasketItem';
import {useContext} from 'react';
import {ShopContext} from '../context'

function BasketList(props) {
	// const {
	// 		order = [], 
	// 		handleBasketShow = Function.prototype,
	// 		removeFromBasket = Function.prototype,
	// 		increaseQuantity = Function.prototype,
	// 		decreaseQuantity = Function.prototype
	// 	} = props;
	const {handleBasketShow = Function.prototype, order = []} = useContext(ShopContext);

	const totalPrice = order.reduce((sum, el) => { // функция подсчета общей стоимости
		return sum + el.finalPrice * el.quantity
	}, 0)

	return       <ul className="collection basket-list">
					<li className="collection-item active indigo darken-4">Cart</li>
					{
						order.length ? order.map((item) => 
							<BasketItem 
								key={item.id} {...item} 
								// removeFromBasket={removeFromBasket}
								// increaseQuantity={increaseQuantity}
								// decreaseQuantity={decreaseQuantity}
								/>
						) : <li className="collection-item">Your cart is empty</li>
					}
					<li className="collection-item active indigo darken-4">Total price: {totalPrice} $</li>
					<li className="collection-item"><button style={{display: 'block', margin: '0 auto'}} className='btn-small blue darken-3 '>Make order</button></li>
					<i className='material-icons basket-close' onClick={handleBasketShow}>close</i>

				</ul>
}

export {BasketList}