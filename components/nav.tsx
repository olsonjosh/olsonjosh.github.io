import Link from 'next/link'

const links = [
  { href: 'https://github.com/olsonjosh', label: 'GitHub' },
]

export default function Nav() {
  return (
    <div className="bg-gray-900 text-white">
      <nav className='max-w-3xl mx-auto'>
        <ul className="flex justify-between items-center py-4">
          <li>
            <Link href="/">
              <a className='font-bold no-underline'>Josh Olson</a>
            </Link>
          </li>
          <ul className='flex justify-between items-center'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className="ml-4">
                <a href={href} className="btn-white no-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </div>
  )
}