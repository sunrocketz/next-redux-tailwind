import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import 'styles/normalize.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
