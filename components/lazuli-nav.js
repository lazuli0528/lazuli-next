import Link from 'next/link'

export default function Nav(props) {
  return (
        <div className="bg-lazuli">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="btn">Lazuli</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
  );
}
