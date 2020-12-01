import './App.scss'
import clsx from 'clsx'
import useStore from './store'
import Todos from './Components/Todos'
import Header from './Components/Header'

function App() {
  const theme = useStore((state) => state.theme)
  const AppClasses = clsx({
    'App': true,
    'dark': theme === 'dark'
  })
  return (
    <div className={AppClasses}>
      <Header />
      <Todos />
    </div>
  )
}

export default App
