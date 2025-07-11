import Navbar from "@/components/Navbar";

export default function CityDetailPage() {
    return (
        <>
            <Navbar/>
            <header className="flex flex-col w-full">
                <section className="relative flex h-[434px]" id="Hero-Banner">
                    <div
                        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
                        id="Hero-Text">
                        <h1 className="font-extrabold text-[50px] leading-[60px]">
                            Great Office in <br />{" "}
                            <span className="text-[#0D903A]">Jakarta Pusat City</span>
                        </h1>
                        <p className="text-lg leading-8 text-[#000929]">
                            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                            dan sehat dalam tumbuhkan karir.
                        </p>
                    </div>
                    <div
                        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden"
                        id="Hero-Image">
                        <img
                            alt="hero background"
                            className="w-full h-full object-cover"
                            src="/assets/images/thumbnails/thumbnail-details-4.png"
                        />
                    </div>
                </section>
            </header>
            <section
                className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]"
                id="Fresh-Space">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    Browse Offices
                </h2>
                <div className="grid grid-cols-3 gap-[30px]">
                    <a className="card" href="details.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-1.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="details-fully-booked.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-3.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Masayoshi Future Space
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="details-closed.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-4.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="details.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-5.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="details-closed.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-6.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Masayoshi Future Space
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="details-fully-booked.html">
                        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                            <div className="thumbnail-container relative w-full h-[200px]">
                                <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                                    Popular
                                </p>
                                <img
                                    alt="thumbnails"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/thumbnails/thumbnails-2.png"
                                />
                            </div>
                            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                                <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                                    Angga Park Central Master Silicon Valley Star Class
                                </h3>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-xl leading-[30px]">
                                        Rp 18.560.000
                                    </p>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">20 days</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/clock.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/location.svg"
                                        />
                                        <p className="font-semibold">Jakarta Pusat</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <p className="font-semibold">4.5/5</p>
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/Star 1.svg"
                                        />
                                    </div>
                                </div>
                                <hr className="border-[#F6F5FD]" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/wifi.svg"
                                        />
                                        <p className="font-semibold">Fast-Connection</p>
                                    </div>
                                    <div className="flex items-center justify-end gap-[6px]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-user.svg"
                                        />
                                        <p className="font-semibold">Secure 100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
  );
} 