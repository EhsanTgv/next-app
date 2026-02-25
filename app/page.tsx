import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Home Page</h1>
      <Link href="/users">Go to Users Page</Link>
      <ProductCard />
    </main>
  )
}
