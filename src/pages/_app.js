import '@styles/globals.scss'
import SmoothScrollbar from 'src/utils/smoothscrollbar'

function MyApp({ Component, pageProps }) {
  return (
    <SmoothScrollbar>
      <Component {...pageProps} />
    </SmoothScrollbar>
  ) 
}

export default MyApp
