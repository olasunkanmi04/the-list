import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="logo" width={77} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja listings</a></Link>
            
        </nav>
     );
}
 
export default Navbar;