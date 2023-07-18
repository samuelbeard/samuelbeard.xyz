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
            className="m-2 rounded bg-slate-300 px-3 py-1 text-center font-bold outline-none hover:bg-slate-400 focus:outline-none"
        >
            {label}
        </button>
    )
}

export default FilterButton
