export default function EmptyList({ isError = false }) {
  return (
    <div className="empty-list">
      {isError ? 
        (<p className="t-empty">🙇‍♂️ Fetching todos failed, please try again latter.</p>)
        :
        (<>
            <p className="t-empty">👀 Todo list is empty</p>
            <p className="t-empty">Add your first todo above ☝️</p>
        </>)
      }
    </div>
  )
}
