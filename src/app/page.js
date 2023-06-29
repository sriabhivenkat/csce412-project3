import Image from 'next/image'

export default function Home() {
  return (
    <div
      className= "h-screen w-screen bg-gray-100 flex justify-center items-center flex-col"
    >
      <h1 className="text-6xl font-bold text-gray-800">Hello World</h1>
      <h3
        className="text-2xl text-gray-400 mt-4"
      >
        By Sriabhinandan Venkataraman (130007213)
      </h3>
      <div
        className="flex flex-row justify-center items-center mt-4"
      >
        <a href='https://csce412svenkataraman.xyz/public_html/index.html'>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Take me to Abhi's Website (CSCE315 Project)
          </button>
        </a>
      </div>
    </div>
  )
}
