import { CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme';
import Routes from "./routers"
function App() {

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>loading...</div>}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App
