import React from 'react';
import { navData } from '../data';

const Nav = () => {
  return (
    <nav className="w-full n-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6">
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a
                className="text-xl capitalize font-primaty italic hover:text-dark transition-all duration-300"
                href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
