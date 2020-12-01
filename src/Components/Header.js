import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>TODO</h1>
        <ThemeToggler />
      </div>
    </header>
  )
}
