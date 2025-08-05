import ipad from '/src/images/hero_endframe__sg50vzdd6sqm_small_2x.jpg'
import iwatch from '/src/images/welcome_hero_endframe__d71hj6st53gy_xsmall_2x.jpg'
import macs from '/src/images/welcome_hero_endframe__c61x1mv7kgqe_small_2x.jpg'
import macpro from '/src/images/Macbook1.png'
import airpod from '/src/images/hero__1z1ep1te3eq2_large_2x.jpg'
import trade from '/src/images/trade1.png'
function Card()
    {
        return(
<>
<div className="container mt-10 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-black text-center p-4">
                    <div className="py-4 space-y-4">
                        <h1 className="text-3xl text-white font-bold lg:text-3xl">iPad Pro</h1>
                        <h3 className="text-md text-white  lg:text-2xl mb-4">
                            Unbeliveably thin.
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={ipad} alt="iPad" className="h-64 object-contain" />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] p-4 text-center shadow-md">
                    <div className="space-y-4 py-4">
                        <h1 className=" text-3xl text-gray-600 font-bold lg:text-3xl">iWatch</h1>
                        <h3 className=' text-xl text-gray-600  lg:text-2xl  mb-4'>Thinstant classic</h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <div className='flex items-center justify-center w-full '>
                            <img src={iwatch} alt="ipad" className=' object-contain h-64' />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>
                <div className="bg-black text-center p-4">
                    <div className="py-4 space-y-4">
                        <h1 className="text-3xl text-white font-bold lg:text-3xl">MacBook Students</h1>
                        <h3 className="text-xl text-white lg:text-2xl mb-4">
                            Incredibly powerful
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={macs} alt="iPad" className="h-64 object-contain" />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>
                <div className="bg-black p-4 text-center">
                    <div className="space-y-4 py-4">
                        <h1 className=" text-3xl text-white font-bold lg:text-3xl">Airpods</h1>
                        <h3 className=' text-xl text-white lg:text-2xl  mb-4'>Realistic Feeling</h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <img src={airpod} alt="ipad" className='w-full object-contain h-64' />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>
                <div className="bg-black text-center p-4">
                    <div className="py-4 space-y-4">
                        <h1 className="text-3xl text-white font-bold lg:text-3xl">MacBook Pro</h1>
                        <h3 className="text-xl text-white  lg:text-2xl mb-4">
                            A Work of Smart
                        </h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>

                        <div className="flex items-center justify-center">
                            <img src={macpro} alt="iPad" className="h-64 object-contain" />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 text-center">
                    <div className="space-y-4 py-4">
                        <h1 className=" text-3xl text-gray-600 font-bold lg:text-3xl">Tradein</h1>
                        <h3 className=' text-xl text-gray-600  lg:text-2xl  mb-4'>Upgrade and Save. It's that easy.</h3>
                        <div className="flex justify-center space-x-4">
                            <button className="py-2 px-4 bg-blue-600 text-white font-extrabold rounded-full">
                                Learn more
                            </button>
                            <button className="py-2 px-4 bg-gray-100 border border-blue-500 text-blue-600 font-extrabold rounded-full hover:bg-blue-500 hover:text-white">
                                Buy
                            </button>
                        </div>

                        <div className='flex items-center justify-center'>
                            <img src={trade} alt="ipad" className='w-full object-contain h-64' />
                        </div>
                        <p className="text-center text-md mt-3 md:text-xl font-semibold bg-gradient-to-r from-[#007aff] via-[#af52de] via-50% to-[#ff3b30] bg-clip-text text-transparent">
                            Built for Apple Intelligence.
                        </p>
                    </div>
                </div>
            </div>
</>
        )
    }
export default Card;