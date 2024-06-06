const Product = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/rxfCsbF/white-duplex.jpg",
      name: "White Duplex Boxes",                               
      description: "We are engaged in manufacturing and supplying an huge range of White Duplex Corrugated Boxes, which are available in prints as desired by our clients. These boxes are used for packing electronics, automobiles and folding cartons. We offer a wide range of White Duplex Boxes, in different sizes, colors and designs. Manufactured using premium material, our boxes are reckoned in the industry for their superior quality and high strength.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/sgLHRFP/heavy-duty.jpg",
      name: "Heavy Duty Corrugated Boxes",
      description: "A wide range of Heavy Duty Corrugated Boxes can be manufacturing from us, which are known for their durability and perfect finishing. This box is best suitable for packaging of products like fruits, clothes, liquor bottles, stationery items, electronics and other allied materials. Further, this Heavy Duty Corrugated Box is made available with us in variety of shapes and sizes at negotiable prices.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/80y6GQn/corrugated-packing.jpg",
      name: "Corrugated Packing Boxes",
      description: "We have the expertise in manufacturing and supplying a large variety of Corrugated Packing Boxes that are widely acclaimed for their durability, easy to carry, light weight and longevity. We are making quality raw materials for fabricating these boxes. We have hundreds of sizes to choose from for all sorts of applications. Our cardboard cartons ship flat to save space and freight costs. To ensure that our products are at par with the highest industry standards.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/Vw8zCyk/Corrugated-Chocolate-Boxes.jpg",
      name: "Corrugated Chocolate Boxes",
      description:
        "We have the expertise in manufacturing and supplying a large variety of Corrugated Packing Boxes that are widely acclaimed for their durability, easy to carry, light weight and longevity. We are making quality raw materials for fabricating these boxes. We have hundreds of sizes to choose from for all sorts of applications. Our cardboard cartons ship flat to save space and freight costs. To ensure that our products are at par with the highest industry standards.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/Y0v34zK/Corrugated-Cardboard-Boxes.jpg",
      name: "Corrugated Chocolate Boxes",
      description: "We are also offering world-class Corrugated Chocolate Boxes, which are made using supreme quality stiff & puncture resistance coated and laminated paper. Premium quality corrugated boxes are used in commercial applications for packaging of chocolate products. We Providing you the best range of Corrugated Chocolate Boxes, and many more with effective & timely delivery.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/4tvPB8t/carton-box.jpg",
      name: "Corrugated Carton Boxes",
      description: "We are one of the prominent manufacturer and supplier of Corrugated Carton Boxes. Our packaging products are manufactured using high grade raw materials that are obtained from some top ranked vendors. We offer a wide range of quality Components of Corrugated Boxes and Sheets that are available in various shapes, sizes and models as per the customer’s provided conditions.",
    },
    {
      id: 7,
      image: "https://i.ibb.co/b2G5hct/Corrugated-Shipping-Boxes.jpg",
      name: "Corrugated Shipping Boxes",
      description: "We are one of the prominent manufacturer and supplier of Corrugated Carton Boxes. Our packaging products are manufactured using high grade raw materials that are obtained from some top ranked vendors. We offer a wide range of quality Components of Corrugated Boxes and Sheets that are available in various shapes, sizes and models as per the customer’s provided conditions.",
    },
    {
      id: 8,
      image: "https://i.ibb.co/CBM90QJ/Printed-Corrugated-Boxes.jpg",
      name: "Printed Corrugated Boxes",
      description: "We are one of the prominent names in industry and are engaged in manufacturing and supplying a huge gamut of Printed Corrugated Boxes, which are fabricated using high grade corrugated sheets, printed paper, crafted paper and innovative technologies. These boxes are available in varied shapes, sizes, fragility and weights that meet different packaging requirements."
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="p-2 border-2 border-r-gray-400 rounded mt-8">
        <h1 className="text-2xl text-[#e67e57] mt-4">Our Products</h1>
        {/* Card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6 p-3 mt-6">
          {data.map((item) => (
            <div className="relative" key={item.id}>
              <img
                className="border-2 w-[350px] h-[290px] border-gray-400 rounded-md shadow-md"
                src={item.image}
                alt=""
              />
              <div className="bg-[#000000b3] rounded-md  overflow-hidden w-full h-16 duration-500 hover:h-full absolute bottom-0">
                <h1 className="text-2xl text-white text-center pt-3">
                  {item.name}
                </h1>
                <p className="text-white mt-8 px-3 p-5">{item.description}....</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
