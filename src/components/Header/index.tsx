import React, {useState, useEffect} from "react";
import Logo from "../../assets/c-coin-svgrepo-com.svg";

import {ROUTES} from "../../utils/constants";
import styles from "./styles.module.scss";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleBurgerClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.headerContainer} ${isMenuOpen ? 'open' : ''}`}>
            <img
                src={Logo}
                alt="Logo"
                height={50}
                width={36}
            />
            {isMobile ? (
                <div
                    className={`${styles.burgerIcon} ${isMenuOpen ? 'open' : ''}`}
                    onClick={handleBurgerClick}
                >
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                    <div className={styles.burgerLine}></div>
                </div>
            ) : (
                <nav className={styles.routesWrapper}>
                    {ROUTES.map((route) => (
                        <a
                            href={route.path}
                            key={route.id}
                            className={styles.headerRouteItem}
                        >
                            {route.title}
                        </a>
                    ))}
                </nav>
            )}
            {isMobile && isMenuOpen && (
                <nav className={`${styles.routesWrapper} mobileMenu`}>
                    {ROUTES.map((route) => (
                        <a
                            href={route.path}
                            key={route.id}
                            className={styles.headerRouteItem}
                        >
                            {route.title}
                        </a>
                    ))}
                </nav>
            )}
            {!isMobile && <button className={styles.headerBtn}>Launch App</button>}
        </header>
    );
};

export default Header;