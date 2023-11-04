import Image from "next/image"
import img from '../../src/oppenheimer.jpeg'


export default function ProductCard() {
  return (
    
    <div className="card card-compact w-96 bg-base-300 shadow-xl m-4">
  <figure><Image src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Direct Link</button>
    </div>
  </div>
</div>
  )
}
 