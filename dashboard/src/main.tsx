import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

let persistor = persistStore(store)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
)
