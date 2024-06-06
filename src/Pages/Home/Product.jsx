const Product = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Vintage Typewriter",
      description: "A classic 1920s typewriter in perfect working condition.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Mountain Bike",
      description: "A rugged mountain bike designed for off-road adventures.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Acoustic Guitar",
      description: "A high-quality acoustic guitar with a rich, full sound.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Smartwatch",
      description:
        "A smartwatch with various health and connectivity features.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Coffee Maker",
      description: "An automatic coffee maker with programmable settings.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/zsDvZj2/slotted-cases-2e16d0ba-fill-400x300.jpg",
      name: "Bluetooth Speaker",
      description: "A portable Bluetooth speaker with excellent sound quality.",
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
                className="border-2 border-gray-400 rounded-md shadow-md"
                src={item.image}
                alt=""
              />
              <div className="bg-[#000000b3] rounded-md w-full h-16 duration-500 hover:h-full absolute bottom-0">
                <h1 className="text-2xl text-white text-center pt-3">
                  {item.name}
                </h1>
                <p className="text-white mt-8 px-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
