import {GoodsItem} from './GoodsItem'
function GoodsList(props) {
	const {goods = []} = props;

	if (!goods.length) {
		return <h3>Nothing was found</h3>
	}
	return <div className="goods">
		{goods.map(item => (
			<GoodsItem key={item.id} {...item}/>
		))}
	</div>
}

export {GoodsList}