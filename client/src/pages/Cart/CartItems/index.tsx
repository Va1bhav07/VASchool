import React from 'react';
import { CourseCard } from '../../../components/CourseCard';
import { CartDataItemsProps } from '../../../shared.types';

type CartItemsProps = {
  cartData: CartDataItemsProps; // Define your cart data type properly
};

function CartItems({ cartData }: CartItemsProps) {
  if (!cartData) {
    return null; // Or render some loading indicator or placeholder
  }
  return (
    <>
      {cartData.map((course, ind) => (
        <React.Fragment key={ind}>
          <CourseCard course={course} border="0" />
          <hr className="my-4" />
        </React.Fragment>
      ))}
    </>
  );
}

export default CartItems;
