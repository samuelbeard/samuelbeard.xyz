import {
    RiCalendarFill,
    RiGlobeLine,
    RiPaintBrushFill,
    RiServerFill,
    RiToolsFill,
    RiGlobalLine,
    RiCheckFill,
} from "react-icons/ri"
import { MdSupport } from "react-icons/md"

export default function HandleItem({ icon, title }) {
    return (
        <div class="w-full xl:w-1/3 md:w-1/2 p-4">
            <div class="p-6 rounded-lg flex justify-between items-center bg-amber-500 shadow-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full border-2 border-white">
                    {icon}
                </div>
                <h2 class="text-lg text-white font-bold title-font mb-0">
                    {title}
                </h2>
            </div>
        </div>
    )
}
