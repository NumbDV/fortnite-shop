
function GoodsItem(props) {
	const {
		mainId: id,
		displayName: name,
		displayDescription: description,
		displayAssets: [{full_background}],
		price,
		addToBasket = Function.prototype,
	} = props;
	const {regularPrice, finalPrice} = price



return   <div className="row">
			<div className="col s12">
				<div className="card">
					<div className="card-image">
						<img src={full_background} alt={name}/>
						
					</div>
					<div className="card-content">
					<span className="card-title">{name}</span>
						<p>{description}</p>
					</div>
					<div className="card-action action-align">
						<button className="btn indigo darken-4" onClick={() => addToBasket({
							id,
							name,
							finalPrice
						})}>Buy</button>
						{
							regularPrice === finalPrice 
							? <span style={{fontSize: '1.8rem', textAlign: 'right'}}>{finalPrice} $</span> 
							: <div className="fullprice"><span  style={{fontSize: '1.4rem', marginLeft: '10%', textDecoration: 'line-through', color: 'red'}}>{regularPrice} $</span>
							<span  style={{fontSize: '1.8rem'}}>{finalPrice} $</span></div>
						}
						{/* <span  style={{fontSize: '1.8rem', marginLeft: '10%', textDecoration: 'line-through'}}>{regularPrice} $</span>
						<span className="right" style={{fontSize: '1.8rem'}}>{finalPrice} $</span> */}
						
					</div>
				</div>
			</div>
		</div>
}
export {GoodsItem}