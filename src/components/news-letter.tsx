'use client';
import { Button } from "./Button"

export const NewsLetter = () => {
  const handleClick = () => {
    console.log('news letter');
  }
  return (
    <form className="flex gap-2 items-center justify-center my-4">
      <input className="border border-secondary rounded-full py-2 px-4 md:min-w-[300px] min-h-[48px] focus:outline-primary" type="email" name="email" id="email" placeholder="Email" />
      <Button text="Discover" onClick={handleClick}/>
    </form>
  )
}