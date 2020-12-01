import create from 'zustand'

const useStore = create((set) => ({
  filter: '',
  todos: [],
  setFilter: (filter) =>
    set((state) => ({
      ...state,
      filter
    })),
  setTodos: (todos) =>
    set((state) => ({
      ...state,
      todos
    }))
}))

export default useStore