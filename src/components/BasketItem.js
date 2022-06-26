
function BasketItem(props) {
	const {
		id,
		name,
		finalPrice,
		quantity,
		removeFromBasket=Function.prototype,
		increaseQuantity = Function.prototype,
		decreaseQuantity = Function.prototype
	} = props;
	return 	(
			<li className="collection-item">
				{name} x <i onClick={() => increaseQuantity(id)} className="material-icons basket-quantity">add</i>{quantity}{' '}<i onClick={() => decreaseQuantity(id)} className="material-icons basket-quantity">remove</i> = {finalPrice * quantity} $	 
				 
				<span 
					className="secondary-content" 
					onClick={() => removeFromBasket(id)}>
				
					<i class="material-icons basket-delete">close</i>
				</span>
			</li>
	)
}

export {BasketItem}