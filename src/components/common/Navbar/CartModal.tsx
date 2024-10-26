import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max bg-white shadow-md p-4 absolute top-12 right-0 z-20 flex flex-col gap-6 ">
      {!cartItems ? (
        <div>empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={"/product.jpeg"}
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="w-full flex flex-col justify-between gap-4">
                {/* top */}
                {/* title & price & desc */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$40.5</div>
                  </div>
                  <div className="text-sm text-gray-500">paragraph</div>
                </div>

                {/* bottom */}
                {/* quantity remove button */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">quantity</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src={"/product.jpeg"}
                alt="product"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="w-full flex flex-col justify-between gap-4">
                {/* top */}
                {/* title & price & desc */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$40.5</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>paragraph</p>
                  </div>
                </div>

                {/* bottom */}
                {/* quantity remove button */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">quantity</span>
                  <span className="text-blue-500">remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* bottom part */}
          {/* sub total */}
          <div>
            {" "}
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$50.5</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          {/* buttons */}
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
              View Cart
            </button>
            <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
              Checkout
            </button>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default CartModal;
