import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                <Link href="/">
                    <Image alt="logo" width={165} height={35} src="/assets/images/logos/logo.svg" />
                </Link>
                <ul className="flex items-center gap-[50px] w-fit">
                    <li>
                        <Link href="/">Browse</Link>
                    </li>
                    <li>
                        <Link href="/">Popular</Link>
                    </li>
                    <li>
                        <Link href="/">Categories</Link>
                    </li>
                    <li>
                        <Link href="/">Events</Link>
                    </li>
                    <li>
                        <Link href="/">My Booking</Link>
                    </li>
                </ul>
                <a
                    className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
                    href="#">
                    <Image
                        alt="icon"
                        width={24}
                        height={24}
                        src="/assets/images/icons/call.svg"
                    />
                    <span className="font-semibold">Contact Us</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

