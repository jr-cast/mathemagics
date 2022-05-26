const Button = ({ className, text, onClick }) => {
  return <button className={className} type="button" text={text} onClick={onClick}>{text}</button>
}

export default Button;