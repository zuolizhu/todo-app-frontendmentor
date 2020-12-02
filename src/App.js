import './App.scss'
import clsx from 'clsx'
import useStore from './store'
import Todos from './Components/Todos'
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'

function App() {
  const theme = useStore((state) => state.theme)
  const AppClasses = clsx({
    'App': true,
    'dark': theme === 'dark',
    'light': theme !== 'dark'
  })
  return (
    <div className={AppClasses}>
      <Header />
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
