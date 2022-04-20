import { FC } from "react"

interface Props {
    label: string
    filter: string
    setFilter: any
}

const FilterButton: FC<Props> = ({ label, filter, setFilter }) => {
    return (
        <button
            onClick={() => setFilter(label)}
            className="bg-slate-300 px-3 py-1 m-2 rounded text-center font-bold outline-none focus:outline-none hover:bg-slate-400"
        >
            {label}
        </button>
    )
}

export default FilterButton
