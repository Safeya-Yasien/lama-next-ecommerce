import { CategoryList, ProductList, Slider } from "@/components";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const HomePage = async () => {
  // const wixClient = await wixClientServer();
  // const response = await wixClient.products.queryProducts().find();

  // console.log(response);

  return (
    <>
      <Slider />
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        {/* <ProductList /> */}
      </div>
    </>
  );
};

export default HomePage;
