import { Nav } from './components'
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:adding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x w-full sm:py-32 py-16'>
        <Subscribe />
      </section>
      <footer className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </footer>
    </main>
  )
}
export default App
