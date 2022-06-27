import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { Shop } from './components/Shop';
import { ContextProvider } from './context';
import './App.css';

function App() {
	return (
		<>
			<Header/>
			<ContextProvider>
				<Shop/>
			</ContextProvider>
			
			<Footer/>
		</>
	);
}

export default App;
