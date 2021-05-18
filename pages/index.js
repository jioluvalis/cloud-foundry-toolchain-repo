import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World from Julio Silva.{' '}</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
