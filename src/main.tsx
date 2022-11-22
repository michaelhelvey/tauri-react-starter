import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './app'
import { store } from './store'

const Root = (
	<Provider store={store}>
		<App />
	</Provider>
)

createRoot(document.getElementById('app') as HTMLElement).render(Root)
