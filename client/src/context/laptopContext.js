import React, { createContext,  useContext } from 'react';

// Create Context
const LaptopContext = createContext();

// Create Provider Component
export const LaptopProvider = ({ children }) => {
  
    const laptops = [
        {
          id: "0",
          productName: "Huawei MateBook X Pro",
          image:
            "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-45811.jpg?ga=GA1.1.1860668642.1707247523&semt=ais_hybrid",
          backview: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2023-13th-gen-core/img/huawei-matebook-x-pro-6-things-to-love-1.jpg",
          sideview: "https://images-na.ssl-images-amazon.com/images/I/41EYu4yb6sL.jpg",
          cpu: "Intel Core i7, 8th generation",
          ram: "8GB",
          storage: "512 GB SSD",
          screen: "13.9-inch, 3K (3,000 x 2,080)",
          price: "1499",
          description:
            "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.",
        },
        {
          id: "1",
          productName: "Huawei MateBook X Pro",
          image:
            "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-45811.jpg?ga=GA1.1.1860668642.1707247523&semt=ais_hybrid",
          backview: "https://www.yugatech.com/wp-content/uploads/2024/07/Huawei-Matebook-X-Pro-1.jpg",
          sideview: "https://www.androidauthority.com/wp-content/uploads/2024/04/Huawei-MateBook-X-Pro-2024-thin-side-profile.jpg",
          cpu: "Intel Core i7, 8th generation",
          ram: "8GB",
          storage: "512 GB SSD",
          screen: "13.9-inch, 3K (3,000 x 2,080)",
          price: "1499",
          description:
            "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.",
        },
        {
          id: "2",
          productName: "Huawei MateBook X Pro",
          image:
            "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-45811.jpg?ga=GA1.1.1860668642.1707247523&semt=ais_hybrid",
          backview: "https://5.imimg.com/data5/CC/JH/KD/SELLER-57126529/huawei-mate-book-x-pro-new-512-gb-laptop-500x500.jpg",
          sideview: "https://images.techadvisor.com/cmsdata/reviews/3692414/huawei_matebook_x_pro_2019_ports.jpg",
          cpu: "Intel Core i7, 8th generation",
          ram: "8GB",
          storage: "512 GB SSD",
          screen: "13.9-inch, 3K (3,000 x 2,080)",
          price: "1499",
          description:
            "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.",
        },
        {
          id: "3",
          productName: "Huawei MateBook X Pro",
          image:
            "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-45811.jpg?ga=GA1.1.1860668642.1707247523&semt=ais_hybrid",
          backview: "https://media.extra.com/i/aurora/100337315_100_08?fmt=auto&w=720",
          sideview: "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_arstechnica.png,fl_progressive,g_face,h_450,q_80,w_800/v1497467701/arstechnica_gear-gadgets-huawei-s-thin-and-powerful-matebook-x-laptop-review.jpg",
          cpu: "Intel Core i7, 8th generation",
          ram: "8GB",
          storage: "512 GB SSD",
          screen: "13.9-inch, 3K (3,000 x 2,080)",
          price: "1499",
          description:
            "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.",
        },
        {
          id: "4",
          productName: "Huawei MateBook X Pro",
          image:
            "https://img.freepik.com/free-photo/laptop-white-background-3d-rendering-computer-generated-image_1142-45811.jpg?ga=GA1.1.1860668642.1707247523&semt=ais_hybrid",
          backview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiBi_sRa0lw3YDAIMnStN7zUsUBEtrHld6Q&s",
          sideview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ418gpwTuigIh8PWw_6hbCJzwS4DIFMjJsbQ&s",
          cpu: "Intel Core i7, 8th generation",
          ram: "8GB",
          storage: "512 GB SSD",
          screen: "13.9-inch, 3K (3,000 x 2,080)",
          price: "1499",
          description:
            "The Huawei MateBook X Pro is our pick for the best laptop money can buy in 2018. This is a gorgeously-designed laptop with a stunning screen (albeit with a rather odd aspect ratio), and it comes packed with cutting edge components that allows it to perform brilliantly, and a battery life that runs rings around many of its rivals. It also has a very competitive price, giving you features, design and performance for quite a bit less money.",
        },
      ];
  

  return (
    <LaptopContext.Provider value={{ laptops }}>
      {children}
    </LaptopContext.Provider>
  );
};

// Custom Hook to use Laptop Context
export const useLaptops = () => useContext(LaptopContext);
