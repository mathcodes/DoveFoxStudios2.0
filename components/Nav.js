import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="main navigation">
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
      <style jsx>{`
        nav {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 1.3rem;
          text-align: center;
        }
        nav a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  )
}
