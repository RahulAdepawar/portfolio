
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-2xl font-bold">Rahul Adepawar</h1>
      <div className="space-x-6">
		<Link href={`/`} className="hover:text-blue-600">Home</Link>
		<Link href={`/contact`} className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
