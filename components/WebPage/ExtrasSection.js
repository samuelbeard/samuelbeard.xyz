import { RiCheckboxCircleFill } from "react-icons/ri"

export default function ExtrasSection() {
    return (
        <div className="bg-amber-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-amber-50">
                <h5 className="text-4xl font-extrabold leading-none md:pl-2">
                    Add features from&nbsp;there
                </h5>
                <p className="mt-0 mb-8 text-lg md:pl-2">
                    On top of the basic package, at any time, you can add more
                    features to your website.
                </p>
                <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
                    <ul className="space-y-3">
                        <ListItem title="Blog" />
                        <ListItem title="Ecommerce store" />
                    </ul>
                    <ul className="space-y-3">
                        <ListItem title="CRM integration" />
                        <ListItem title="Contact forms" />
                    </ul>
                    <ul className="space-y-3">
                        <ListItem title="Questionnaire" />
                        <ListItem title="Booking system" />
                        <ListItem title="Anything else" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ListItem = ({ title }) => (
    <li className="flex items-start">
        <span className="mr-2">
            <RiCheckboxCircleFill className="w-5 h-5 mt-px text-amber-500" />
        </span>
        {title}
    </li>
)
