
function BasketItem(props) {
	const {
		id,
		name,
		finalPrice,
		quantity
	} = props;
	return 	(
			<li className="collection-item">
				{name} x {quantity} = {finalPrice}
				<span class="secondary-content">
					<i class="material-icons basket-delete">close</i>
				</span>
			</li>
	)
			

}

export {BasketItem}