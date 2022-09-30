import { useState } from 'react';
import Link from 'next/link'

function LazuliNav(props) {
    const [isHome] = useState(props.home !== undefined ? props.home : true);    
    
    return (
        <div className="bg-lazuli">
            <div className="container">
                <nav className="navbar">
                    {isHome &&
                        <div className="navbar-brand">
                            <Link href="/">
                                <a className="btn">Lazuli</a>
                            </Link>
                        </div>
                    }
                    <div className="ms-auto"></div>
                </nav>
            </div>
        </div>
    );
}

export default LazuliNav;
