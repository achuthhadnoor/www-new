import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect, ReactChild, ReactFragment, ReactPortal } from 'react';
import styles from 'styles/mobile-menu.module.css';
import { menu } from '../constants';
import { UrlObject } from 'url';
import { CrossIcon, Logo, MenuIcon } from './Svg';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute bg-gray-100',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li>
            <Logo/>
          </li>
          {
            menu.map((menuItem: { link: string | UrlObject; name: boolean | ReactChild | ReactFragment | ReactPortal; }, i: number) => (
              <li
                key={`menu-${i}`}
                className="border-b-2 border-gray-200  text-gray-900 text-sm font-semibold "
                style={{ transitionDelay: `${150 + 15 * i }ms` }}
              >
                <Link href={menuItem.link}>
                  <a className="flex w-auto pb-4">{menuItem.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
      )}
    </>
  );
}
