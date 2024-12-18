
import './App.css'
import Home from "@/Home.tsx";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home/>
      </ThemeProvider>

    </>
  )
}

export default App
