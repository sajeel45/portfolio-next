import Link from "next/link";


export default function Navbar(){
    return(
        <div className="container-fluid flex justify-between">
            <div></div>
            <div>
                <ul className="flex">
                    <li className="py-4 px-3"><Link href={"/"}>Home</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>About</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>Services</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>Skills</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>Projects</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>Blogs</Link>
                    <ul>
                        <li>Blogs 1</li>
                        <li>Blogs 1</li>
                    </ul>
                    </li>
                    <li className="py-4 px-3"><Link href={"/"}>Pricing</Link></li>
                    <li className="py-4 px-3"><Link href={"/"}>Contact</Link></li>

                </ul>
            </div>
            <div></div>
        </div>
    )
}