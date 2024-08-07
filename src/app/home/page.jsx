import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import { TiShoppingCart } from "react-icons/ti";

const Home = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  const items = [
    { text: "Arduino\nBOARD", image: "/Arduino.jpg" },
    { text: "Banana ject\nDIP", image: "/Banana.jpg" },
    { text: "Esp32\nBOARD", image: "/es-p.jpg" },
    { text: "Multimeter\nAC/DC", image: "/mutti.jpg" }
  ];

  return (
    <div>
      <MainHeader session={session} />
      <div className='flex justify-center py-2'>
        <div className='bg-cyan-100 rounded-lg w-full mx-4 mr-2 h-14 p-4 flex flex-wrap justify-center'>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>IC CMOS</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>BOARD</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>ACCESSORIES</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>BOARD DIGITAL</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>CAPACITOR</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>CONNECTOR</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIODE</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIP JUMPER</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>FUSE</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIGITAL</button>
        </div>
        <div className=''>
          <div className='flex items-center  rounded-lg p-4 mr-4 h-14 bg-cyan-100 cursor-pointer'>
            <TiShoppingCart className='text-3xl text-gray-400 mx-1 ' />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-start flex-wrap mt-0">
        {items.map((item, index) => (
          <div key={index} className="relative bg-gray-200 rounded-lg p-4 w-48 h-62 mt-10 mr-6 cursor-pointer flex flex-col items-center">

            <img src={item.image} alt={item.text.split("\n")[0]} className="w-full h-36 object-cover mb-4 mt-1 rounded-lg" />
            <div className="text-center">
              <div className="font-bold text-sm">{item.text.split("\n")[0]}</div>
              <div className="text-xs">{item.text.split("\n")[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
