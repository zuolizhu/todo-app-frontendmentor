import create from 'zustand'

const useStore = create((set) => ({
  filter: '',
  todos: [],
  theme: 'dark',
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter
    })),
  setTodos: (todos) =>
    set((state) => ({
      ...state,
      todos
    })),
  setTheme: (theme) =>
    set((state) => ({
      ...state,
      theme
    }))
}))

export default useStore