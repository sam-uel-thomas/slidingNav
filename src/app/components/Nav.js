import Link from "next/link";

export default function Nav({ isOpen }) {

    const navItems = [
        { title : 'Home',href: '/', },
        { title: 'About', href: '/about', },
        { title: 'Work', href: '/work', },
        { title: ' Contact',href: '/contact', }
    ]

    const links = [
        { title : 'instagram',href: '/insta', },
        { title: 'github', href: '/git', },
        { title: 'otherlink', href: '/other', },
        { title: ' linkedin',href: '/linkedin', }
    ]

    return (
        <nav className={`fixed top-0 right-0 h-full  w-full md:w-[500px] pt-32 pb-24 px-12 bg-[#3236ff] transform duration-400 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col justify-between h-full">
                <div className="w-full gap-8 flex flex-col">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-medium text-2xl uppercase">Navigation</h1>
                        <div className="h-px w-full bg-white"/>
                    </div>
                    <ul className="flex flex-col gap-6 mt-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-white text-5xl font-medium uppercase"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full">
                    <ul className="w-full flex flex-row justify-between">
                        {links.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-white lowercase text-[16px] hover:underline">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}