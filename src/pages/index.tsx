import Nav from '../components/nav'
import { MDXProvider } from '@mdx-js/react'

const components = {
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
