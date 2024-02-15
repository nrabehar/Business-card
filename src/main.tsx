import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
