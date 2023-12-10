import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <div className="flex flex-col items-center mt-2">
          <p className={`text-lg ${product.onSale === "yes" ? "line-through" : ""}`}>
            {product && product.price}₩
          </p>
          {product.onSale === "yes" && (
            <p className="text-base font-bold text-red-700">
              {(
                product.price -
                product.price * (product.priceDrop / 100)
              )}₩
            </p>
          )}
        </div>

      </div>
    </div>
  )
}