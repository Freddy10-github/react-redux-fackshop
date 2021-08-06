import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProducComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className=" border p-3" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="">
              <div className=" w-full">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className=" text-xl">{title}</div>
                <div className=" font-bold">$ {price}</div>
                <div className=" border rounded-3xl bg-gray-200 inline-block px-2">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProducComponents; //2809
