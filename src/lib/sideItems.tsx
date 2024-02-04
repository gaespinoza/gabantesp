
import { Session } from "next-auth";
import React from "react";
import { SideNavItem } from '../types/SideNavItem';
import { Icon } from '@iconify/react';

type SideNavProps = {
    session: Session|null;
  }
export async function sideItems( {session}: SideNavProps) {
    const isAdmin = session ? session.user.role === "ADMIN" : false;
    const blogPosts: SideNavItem[] = [
        {
            title: "Blog",
            path: "/blog"
        }
    ];
    if (isAdmin) {
        blogPosts.push(
            {
                title: "Create Blog Post",
                path:"/blog/create"
            } 
        )
    }
    const sideNavItems: SideNavItem[] = [
        {
            title: 'Home',
            path: '/',
            icon: <Icon icon="lucide:home" width="24" height="24" />,
        },
        {
            title: "Photos",
            path:"/photos",
            icon: <Icon icon="lucide:camera" width="24" height="24" />,
            submenu: isAdmin,
            subMenuItems: [
                {
                    title: "Photos",
                    path:"/photos"
                },
                {
                    title: "Publish Photo",
                    path:"/photos/create"
                }
            ]
        },
        {
            title: "Blog",
            path: "/blog",
            icon: <Icon icon="lucide:book" width="24" height="24" />,
            submenu: true,
            subMenuItems: blogPosts
        },
        {
            title: "Resume",
            path: "/Resume.pdf",
            icon: <Icon icon="mingcute:paper-line" width="24" height="24" />
        }
    ]

    if (session) {
        sideNavItems.push(
            {
                title: "Log Out",
                path: "/api/auth/signout",
                icon: <Icon icon="lucide:log-out" width="24" height="24" />,
            }
        )
    };
    return sideNavItems;

}