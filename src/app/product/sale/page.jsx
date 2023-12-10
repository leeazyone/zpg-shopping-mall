import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function Home() {
  const { product } = data

  const saleProducts = product.slice(46);
  return (
    <div>
      {/* 영역 1: Sale */}
      <div className="text-center ml-4"> {/* 왼쪽 마진 추가 */}
      <h1 className="text-9xl md:text-16xl font-bold py-10">
      Black Friday!
        </h1>
        <br></br><br></br><br></br>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"> 
          {saleProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
