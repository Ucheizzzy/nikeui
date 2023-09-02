import { ReviewCard } from '../components'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className='max-container '>
      <div>
        <h2 className='text-4xl font-bold font-palanquin text-center'>
          What our <span className='text-coral-red'>customers</span> say?
        </h2>
        <p className='info-text mx-auto max-w-lg text-center mt-5'>
          Hear genuine stories from our satisfied customers about their
          expectational experiences with us
        </p>
      </div>
      <div className='flex flex-1 justify-center items-center max-lg:flex-col mt-24 gap-14'>
        {reviews.map((review) => {
          return <ReviewCard key={review.feedback} {...review} />
        })}
      </div>
    </section>
  )
}
export default CustomerReviews
