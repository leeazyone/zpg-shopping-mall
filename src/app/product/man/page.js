import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function Home() {
  const { product } = data

  // 제품 리스트를 세 개의 영역으로 나누기
  const manProducts = product.slice(1, 18);


  return (
    <div>
      <div className="text-center ml-4"> {/* 왼쪽 마진 추가 */}
        <h1 className="text-9xl md:text-16xl font-bold py-10">
          Man
        </h1>
        <br></br><br></br><br></br>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"> 
          {manProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
