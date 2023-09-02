import { ServiceCard } from '../components'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='flex flex-wrap max-container justify-center gap-10 '>
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />
      })}
    </section>
  )
}
export default Services
