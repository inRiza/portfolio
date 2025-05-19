'use client';

const Tabs = [
    {
        key: "for-you",
        label: "Me",
    },
    {
        key: "projects",
        label: "Projects",
    },
    {
        key: "achievements",
        label: "Achievements",
    },
    {
        key: "blog",
        label: "Blog",
    },
    {
        key: "contact",
        label: "Contact",
    },
]

type NavTabsProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const NavTabs = ({activeTab, onTabChange}: NavTabsProps) => {
    return (
        <div className='flex justify-center sticky top-0 border-b-[1px] border-border-gray text-sm bg-black'>
            {Tabs.map((tab) => {
                return (
                    <button 
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        className='relative flex-1 text-center px-8 py-4 font-bold hover:bg-hover-gray transition'>
                            {tab.label}
                            {activeTab === tab.key && (
                                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full border-b-4 border-icon-blue'></span>
                            )}
                    </button>
                );
            })}
        </div>
    )
}

export default NavTabs