import './App.scss'
import clsx from 'clsx'
import useStore from './store'
import Todos from './Components/Todos'
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import FloatingRadioFilter from './Components/FloatingRadioFilter'
import BottomNotification from './Components/BottomNotification'

function App() {
  const theme = useStore((state) => state.theme)
  const todos = useStore((state) => state.todos)

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
      {todos.length > 0 && <FloatingRadioFilter />}
      {todos.length > 0 && <BottomNotification />}

    </div>
  )
}

export default App
