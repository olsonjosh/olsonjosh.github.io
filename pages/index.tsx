import Nav from '../components/nav'
import Image from 'next/image'
import { MDXProvider } from '@mdx-js/react'

const components = {
  img: Image
}

export default function Home(props) {
  return (
    <div>
      <Nav />
      <div className='max-w-3xl mx-auto px-4 pt-16'>
        <h1 className="title">Welcome</h1>
      </div>
      <MDXProvider components={components}>
        <main {...props} />
      </MDXProvider>
    </div>
  )
}
