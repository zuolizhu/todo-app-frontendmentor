import ThemeToggler from './ThemeToggler'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="t-branding" href="/">TODO</a>
        <ThemeToggler />
      </div>
    </header>
  )
}
