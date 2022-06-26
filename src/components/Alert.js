import { useEffect} from 'react'

function Alert(props) {
	const {name = '', closeAlert = Function.prototype} = props;

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 333000)

		return () => {
			clearTimeout(timerId)
		}
	// eslint-disable-next-line
	}, [name])
	
	return <div id="toast-container">
				<div className="toast">{name} added to cart</div>
			</div>
}

export {Alert}