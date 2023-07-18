import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Fragment } from "react"
import { RiArrowDownSLine, RiQuillPenLine } from "react-icons/ri"
import { format, parse } from "date-fns"

const solutions = [
    {
        title: "Cron Basics",
        date: "2017-02-20",
        href: "##",
    },
    {
        title: "Automations",
        date: "2017-02-20",
        href: "##",
    },
    {
        title: "Reports",
        date: "2017-02-20",
        href: "##",
    },
]

const WritingLink = () => {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={`
                                ${open ? "" : "text-opacity-90"}
                                mx-1 my-1 flex items-center rounded p-1 hover:bg-slate-400`}
                    >
                        <RiQuillPenLine className="h-6 w-6" />
                        <RiArrowDownSLine className="h-4 w-4" />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                            <div className="overflow-hidden rounded-lg border-2">
                                <div className="bg-slate-100 px-10 pt-7">
                                    <h3 className="text-xl font-bold">
                                        Writing
                                    </h3>
                                </div>
                                <div className="relative grid gap-8 bg-slate-100 px-7 pt-5 pb-7 lg:grid-cols-2">
                                    {solutions.map(item => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <div className="ml-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {format(
                                                        parse(
                                                            item.date,
                                                            "yyyy-MM-dd",
                                                            new Date()
                                                        ),
                                                        "do MMMM yyyy"
                                                    )}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

export default WritingLink
