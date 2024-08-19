import React from 'react'
import ReactDOM from 'react-dom/client'
import Tutos from '../page/Tutospoint'

// Can't be null
ReactDOM.createRoot(document.getElementById('react-app')!).render(
	<React.StrictMode>
		<Tutos />
	</React.StrictMode>
)