export default function FreshSpaceSection() {
    return (
        <section
            className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
            id="Fresh-Space">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                Browse Our Fresh Space.
                <br />
                For Your Better Productivity.
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

            </div>
        </section>
    );
};