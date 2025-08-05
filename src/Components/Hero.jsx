import promo from '/src/videos/v1.mp4'
import macair from '/src/images/welcome_hero_endframe__c61x1mv7kgqe_large_2x.jpg'
import mx from '/src/images/iPhone16max.png'
function Hero() {
    return (
        <>
            <div className="bg-gray-100 my-4 p-2 text-center mx-auto">
                <div className=" py-6 space-y-4">
                    <h1 className=" text-4xl font-bold lg:text-5xl">i16 Pro Max</h1>
                    <h3 className=' text-xl  lg:text-3xl text-gray-800 mb-4'>Meet the iPhone 16 family</h3>
                    <div className="flex justify-center space-x-4">
                        <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                            Learn more
                        </button>
                        <button className="text-s py-2 px-2 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                            Shop iPhone
                        </button>
                    </div>
                    <p className="text-center text-md lg:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                        Built for Apple Intelligence.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={mx} alt="iphone16mx" />
                </div>
            </div>
            <header className=' bg-gray-100 py-6'>

                <video className=' w-[90%]  mx-auto rounded-xl' src={promo} autoPlay muted loop></video>
            </header>



            <div className="bg-black my-4 p-2 text-center">
                <div className=" py-6 space-y-5">
                    <h1 className=" text-4xl font-bold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent lg:text-5xl">MacBook Pro</h1>
                    <h3 className=' text-xl  lg:text-3xl text-gray-800 leading-relaxed'>
                        Sky blue Color.<br />
                        Sky high performance with M4.
                    </h3>
                    <div className="flex justify-center space-x-4">
                        <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                            Learn more
                        </button>
                        <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                            Buy
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={macair} alt="Macbook" className=' h-64' />
                </div>
                <p className="text-center text-md lg:text-2xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                    Built for Apple Intelligence.
                </p>
            </div>
        </>
    )
}
export default Hero;