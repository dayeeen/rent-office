import OfficeSpaceCard from "../components/OfficeSpaceCard";
import { officeSpaces } from "../data/officeSpaces.mock";

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
                {officeSpaces.map((space) => (
                    <OfficeSpaceCard key={space.id} space={space} />
                ))}
            </div>
        </section>
    );
};