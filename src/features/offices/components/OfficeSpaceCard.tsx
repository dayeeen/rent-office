import Link from "next/link";
import { OfficeSpace } from "../types/officeSpace.types";
import Image from "next/image";

export default function OfficeSpaceCard({ space }: { space: OfficeSpace }) {
    return (
        <Link className="card" href={`/office/${space.slug}`}>
            <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                <div className="thumbnail-container relative w-full h-[200px]">

                    {space.tags.map(tag => (
                        <p key={tag} 
                        className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                            {tag}
                        </p>
                    ))}

                    <Image
                        alt="thumbnails"
                        className="w-full h-full object-cover"
                        width={500}
                        height={200}
                        src={space.image}
                    />
                </div>
                <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                    <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                        {space.title}
                    </h3>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl leading-[30px]">
                            Rp {space.price.toLocaleString('id-ID')}
                        </p>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">{space.duration}</p>
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
                            <Image
                                alt="icon"
                                width={24}
                                height={24}
                                src="/assets/images/icons/location.svg"
                            />
                            <p className="font-semibold">{space.location}</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">{space.rating}/5</p>
                            <Image
                                alt="icon"
                                width={24}
                                height={24}
                                src="/assets/images/icons/Star 1.svg"
                            />
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end gap-[6px]">
                            <Image
                                alt="icon"
                                width={24}
                                height={24}
                                src="/assets/images/icons/wifi.svg"
                            />
                            <p className="font-semibold">High-Speed Internet</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <Image
                                alt="icon"
                                width={24}
                                height={24}
                                src="/assets/images/icons/security-user.svg"
                            />
                            <p className="font-semibold">100% Private</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}