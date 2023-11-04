import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { auth } from "@clerk/nextjs"

export default function Nav() {
  const userId = auth().userId;
  console.log(userId);
  return (
    <div className=" bg-blend-multiply drop-shadow-md container flex flex-row  justify-between bg-slate-950 rounded ">
      <div className="p-4 font-bold text-3xl" >Visual Search</div>
      <div className="p-4">
        {!userId ? <div className="flex flex-row gap-4">
          
          <div className="btn btn-active"><Link href='sign-in'>Sign In</Link></div>
          <div className="btn btn-active"><Link href='sign-up'>Sign Up</Link></div>
          
        </div> : <UserButton afterSignOutUrl="/" >Logout</UserButton> }
         
        
      
      </div>
      
      
    </div>
    
  )
}
