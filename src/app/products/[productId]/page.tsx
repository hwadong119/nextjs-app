// src/app/products/[productId]/page.tsx

import getCurrentUser from '@/app/actions/getCurrentUser';
import getProductById from '@/app/actions/getProductById'
import EmptyState from '@/components/EmptyState';
import React from 'react'

interface Params {
  productId?: string
}

const ProductPage = async ({ params }: { params: Params }) => {

  const product = await getProductById(params);
  const currentUser = await getCurrentUser();

  if (!product) {
    return (
      <EmptyState />
    )
  }

  return (
    <div>ProductPage</div>
  )
}

export default ProductPage