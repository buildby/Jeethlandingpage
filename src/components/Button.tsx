import Link from "next/link";

export const Button = ({ text, link, className, onClick }: {
  text: string,
  link?: string,
  className?: string
  onClick?: () => void
}) => {
  const defaultClass = "w-[fit-content] bg-secondary text-white text-md md:text-lg font-semibold py-2 px-6 rounded-full border-2 border-transparent hover:text-secondary hover:bg-primary hover:border-white hover:text-white transition-all"
  if (link) {
    return (
      <Link href={link} className={`${defaultClass} ${className}`} > {text} </Link>
    );
  } else if (onClick) {
    return (
      <button onClick={onClick} className={`${defaultClass} ${className}`}> {text}</button>
    )
  } else {
    return null;
  }

}