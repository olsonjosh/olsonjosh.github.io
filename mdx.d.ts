declare module '@mdx-js/react'
declare module '@next/mdx'

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}