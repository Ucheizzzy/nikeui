const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 gap-2 font-montserrat leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-coral-red text-white border-coral-red'
      } rounded-full  shadow-md ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} className='ml-2 rounded-full bg-white w-5 h-5' />
      )}
    </button>
  )
}
export default Button
