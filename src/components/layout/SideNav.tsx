'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SideNavItem } from '../../types/SideNavItem';
import { sideItems } from '../../lib/sideItems';
import { Session } from 'next-auth';
import { Head } from './Head';

type SideNavProps = {
    session: Session|null
  }

const SideNav = ({session}: SideNavProps) => {
    const [items, setItems] = useState<SideNavItem[]>([]);
    const [queryItems, setQueryItems] = useState<boolean>(true);
    useEffect(() => {
        async function getItems() {
            return await sideItems({session});
        }
        if (queryItems) {
            getItems().then((items) => {
                setItems(items);
            });
            setQueryItems(false);
        }
        
    }, [setItems, session, queryItems, setQueryItems])
    

    return (
        <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex bg-gradient-to-t from-[#c6eab2] z-100">
            
            <div className="flex flex-col space-y-6 w-full">
                <Link
                href="/"
                className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                    
                    <Head/>
                    <span className="font-bold text-xl flex ">Gabriel</span>
                
                </Link>

                <div className="flex flex-col space-y-2  md:px-6 ">
                {items.map((item, idx) => {
                    return <MenuItem key={idx} item={item}/>;
                })}
                </div>
            </div>
        </div>
    );
};

export default SideNav;

type MenuItemProps = {
    item: SideNavItem,
}

const MenuItem = ({ item }: MenuItemProps) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className=""
        // {cn(
        //     `bg-gradient-radial from-[#f2de5d]`
        // )}
        >
        {item.submenu ? (
            <>
            <button
                onClick={toggleSubMenu}
                className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${pathname ? 
                pathname.includes(item.path) ? 'bg-zinc-100' : '' : ''
                }`}
            >
                <div className="flex flex-row space-x-4 items-center">
                {item.icon}
                <span className="font-semibold text-xl  flex">{item.title}</span>
                </div>

                <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                {/* <Icon icon="lucide:chevron-down" width="24" height="24" /> */}
                </div>
            </button>

            {subMenuOpen && (
                <div className="my-2 ml-12 flex flex-col space-y-4">
                {item.subMenuItems?.map((subItem, idx) => {
                    return (
                    <Link
                        key={idx}
                        href={subItem.path}
                        className={`${
                        subItem.path === pathname ? 'font-bold' : ''
                        }`}
                    >
                        <span>{subItem.title}</span>
                    </Link>
                    );
                })}
                </div>
            )}
            </>
        ) : (
            <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
                item.path === pathname ? 'bg-zinc-100' : ''
            }`}
            >
            {item.icon}
            <span className="font-semibold text-xl flex">{item.title}</span>
            </Link>
        )}
        </div>
    );
};