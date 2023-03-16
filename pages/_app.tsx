import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import { ThemeProvider } from '@mui/material'
import tema from '../src/themes/theme'

//para não haver repetições de varios elementos (como o cabeçalho) 
// em diversas páginas, podemos colocar o elemento aqui 
// que ele irá se repetir para todas as outras páginas 
// automáticamente

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={tema}>
      <Cabecalho/>
      <Component {...pageProps} />
    </ThemeProvider>
    
  
  )
}

export default MyApp
