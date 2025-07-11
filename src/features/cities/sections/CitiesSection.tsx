export default function CitiesSection() {
    return (
        <section className="flex flex-col gap-[30px] mt-[100px]" id="Cities">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br />
                    Our Favorite Cities
                </h2>
                <a
                    className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
                    href="#">
                    Explore All City
                </a>
            </div>
            <div className="swiper w-full">
                <div className="swiper-wrapper">

                    <div className="swiper-slide !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                        <a className="card" href="city-details.html">
                            <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
                                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                                    <h3 className="font-bold text-xl leading-[30px] text-white">
                                        Jakarta Pusat
                                    </h3>
                                    <p className="text-white">189 Offices</p>
                                </div>
                                <img
                                    alt="thumbnails"
                                    className="absolute w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-2.png"
                                />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}