import React from 'react'
import ReactDOM from 'react-dom/client'
import Api from '../page/Api'
import {
	QueryClient,
	QueryClientProvider
} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
				<Api />
		</QueryClientProvider>
	</React.StrictMode>
)