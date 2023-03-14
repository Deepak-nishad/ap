import React from 'react'
const Header = () => {
    return (
        <>
            <div className="nav-items">
                <ul>
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/about">
                        <li>About</li>
                    </a>
                    <a href="/contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </>
    )
}
export default Header;