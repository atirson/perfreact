import { memo } from 'react'

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  }
}

const ProductComponent = ({ product }: ProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export const ProductItem = memo(ProductComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})