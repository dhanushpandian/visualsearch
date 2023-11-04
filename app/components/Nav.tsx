import { UserButton } from "@clerk/nextjs"

export default function Nav() {
  return (
    <div className='Nav flex justify-between bg-slate-950'>
      <div className='p-4 font-semibold text-xl '>Visual Search</div>
      <div className='text-lg p-4'>
        <UserButton >Logout</UserButton>
      </div>
    </div>
  )
}
