'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Tabs = [
    {
        href: "/",
        label: "For You",
    },
    {
        href: "/projects",
        label: "Projects",
    },
    {
        href: "/achievements",
        label: "Achievements",
    },
    {
        href: "/blog",
        label: "My Blog",
    },
]

const NavTabs = () => {
    const pathname = usePathname();
    // console.log(pathname)
    return (
        <div className='flex justify-center sticky top-0 border-b-[1px] border-border-gray text-sm'>
            {Tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                    <Link 
                        href={tab.href}
                        key={tab.label}
                        className='relative flex-1 text-center px-8 py-4 font-bold hover:bg-hover-gray transition'>
                            {tab.label}
                            {isActive && (
                                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full border-b-4 border-icon-blue'></span>
                            )}
                    </Link>
                );
            })}
        </div>
    )
}

export default NavTabs