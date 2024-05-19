'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Close from "@/app/navbar/icons/Close";
import Menu from "@/app/navbar/icons/Menu";
import Search from "@/app/navbar/icons/Search";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.linksWrapper}>
                    <div className={styles.logo}>
                        <Link href="/">AEON</Link>
                    </div>
                    <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
                        <Link href="/">Showcase</Link>
                        <Link href="/">Docs</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Analytics</Link>
                        <Link href="/">Commerce</Link>
                        <Link href="/">Templates</Link>
                        <Link href="/">Enterprise</Link>
                    </div>
                </div>
                <div className={styles.navbarRight}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search Documantation..."/>
                    </div>
                    <div className={styles.navIcon}>
                        <Search />
                    </div>
                    <div className={styles.navIcon} onClick={toggleMenu}>
                        {isOpen ? <Close /> : <Menu />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
