import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 text-center max-w-sm'>{feedback}</p>
      <div className='flex justify-center items-center  gap-2'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  )
}
export default ReviewCard
