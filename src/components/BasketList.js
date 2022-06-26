import {BasketItem} from './BasketItem'

function BasketList(props) {
	const {order = [], handleBasketShow = Function.prototype} = props;

	const totalPrice = order.reduce((sum, el) => { // функция подсчета общей стоимости
		return sum + el.finalPrice * el.quantity
	}, 0)

	return       <ul className="collection basket-list">
					<li className="collection-item active">Cart</li>
					{
						order.length ? order.map((item) => 
							<BasketItem key={item.id} {...item}/>
						) : <li className="collection-item">Your cart is empty</li>
					}
					<li className="collection-item active">Total price: {totalPrice} $</li>
					<i className='material-icons basket-close' onClick={handleBasketShow}>close</i>

				</ul>
}

export {BasketList}