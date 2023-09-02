const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 gap-2 font-montserrat leading-none rounded-full bg-coral-red text-white border-coral-red shadow-md'>
      {label}
      {iconURL && (
        <img src={iconURL} className='ml-2 rounded-full bg-white w-5 h-5' />
      )}
    </button>
  )
}
export default Button
