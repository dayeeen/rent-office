import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <header className="flex flex-col w-full">
        <section className="relative flex h-[720px] -mb-[93px]" id="Hero-Banner">
          <div
            className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
            id="Hero-Text">
            <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
              <img
                alt="icon"
                className="w-5 h-5"
                src="/assets/images/icons/crown-white.svg"
              />
              <span className="font-semibold text-white">
                We’ve won top productivity 500 fortunes
              </span>
            </div>
            <h1 className="font-extrabold text-[50px] leading-[60px]">
              All Great Offices.
              <br />
              Grow Your Business.
            </h1>
            <p className="text-lg leading-8 text-[#000929]">
              Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
              dan sehat dalam tumbuhkan karir.
            </p>
            <div className="flex items-center gap-5">
              <a
                className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A]"
                href="#">
                <img
                  alt="icon"
                  className="w-[30px] h-[30px]"
                  src="/assets/images/icons/slider-horizontal-white.svg"
                />
                <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">
                  Explore Now
                </span>
              </a>
              <a
                className="flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white"
                href="#">
                <img
                  alt="icon"
                  className="w-[30px] h-[30px]"
                  src="/assets/images/icons/video-octagon.svg"
                />
                <span className="font-semibold text-xl leading-[30px]">
                  Watch Story
                </span>
              </a>
            </div>
          </div>
          <div
            className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden"
            id="Hero-Image">
            <img
              alt="hero background"
              className="w-full h-full object-cover"
              src="/assets/images/backgrounds/banner.webp"
            />
          </div>
        </section>
        <div className="flex flex-col pt-[150px] pb-10 px-[120px] gap-10 bg-[#0D903A]">
          <div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] h-[38px] mx-auto gap-[60px]">
            <img alt="clients logo" src="/assets/images/logos/TESLA.svg" />
            <img alt="clients logo" src="/assets/images/logos/Libra 2.svg" />
            <img alt="clients logo" src="/assets/images/logos/Binance logo.svg" />
            <img alt="clients logo" src="/assets/images/logos/Facebook 7.svg" />
            <img alt="clients logo" src="/assets/images/logos/Microsoft 6.svg" />
          </div>
          <div className="flex justify-center gap-[50px]">
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">
                Comfortable Space
              </p>
              <p className="font-bold text-[38px] leading-[57px] text-white">
                580M+
              </p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">
                Startups Succeed
              </p>
              <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
              <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
            </div>
            <div className="flex flex-col gap-[2px] text-center">
              <p className="text-xl leading-[30px] text-[#F7F7FD]">
                Supportive Events
              </p>
              <p className="font-bold text-[38px] leading-[57px] text-white">
                139M+
              </p>
            </div>
          </div>
        </div>
      </header>
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
      <section
        className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]"
        id="Benefits">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          We Might Good <br />
          For Your Business
        </h2>
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/security-user.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">
                Privacy-First Design
              </p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/group.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">Easy Move Access</p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/3dcube.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">Flexibility Spaces</p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/cup.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">Top-Rated Office</p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/coffee.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">
                Extra Snacks Available
              </p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                alt="icon"
                className="w-[34px] h-[34px]"
                src="/assets/images/icons/home-trend-up.svg"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">
                Sustain for Business
              </p>
              <p className="text-sm leading-[24px]">
                Lorem available without even higher tax that cost much
              </p>
            </div>
          </div>
        </div>
      </section>
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
    </>,
  );
}
