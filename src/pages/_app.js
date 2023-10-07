import { Provider } from 'react-redux'
import { store } from '../store'

export default function App({ Component, pageProps }) {
  console.log("FDSFDSFdsf")
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
