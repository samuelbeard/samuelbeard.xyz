import { useEffect, useState } from "react"
import { FaBaby, FaCode, FaSpinner } from "react-icons/fa6"
import { FaBirthdayCake } from "react-icons/fa"
import { GiLinkedRings } from "react-icons/gi"
import { TbParachute } from "react-icons/tb"
import { RiAB } from "react-icons/ri"

interface IDay {
    date: string
    event: string
    icon: any
}

const birthDate = "1991-09-27"
const significantDates = [
    { date: "1991-09-27", event: "The day I was born", icon: <FaBaby /> },
    {
        date: "1992-09-27",
        event: "My first birthday",
        icon: <FaBirthdayCake />,
    },
    {
        date: "1996-09-27",
        event: "My fifth birthday",
        icon: <FaBirthdayCake />,
    },
    {
        date: "2001-09-27",
        event: "My tenth birthday",
        icon: <FaBirthdayCake />,
    },
    {
        date: "2009-09-27",
        event: "My eighteenth birthday",
        icon: <FaBirthdayCake />,
    },
    {
        date: "2012-09-27",
        event: "My twenty-first birthday",
        icon: <FaBirthdayCake />,
    },
    {
        date: "2021-09-27",
        event: "My thirtieth birthday",
        icon: <FaBirthdayCake />,
    },
    { date: "2022-05-28", event: "Went skydiving", icon: <TbParachute /> },
    { date: "2013-03-22", event: "I got married", icon: <GiLinkedRings /> },
    { date: "2016-01-26", event: "Had my first kid", icon: <FaBaby /> },
    { date: "2018-09-29", event: "Had my second kid", icon: <FaBaby /> },
    { date: "2023-07-07", event: "Created this", icon: <FaCode /> },
]

export default function DaysGrid() {
    const [days, setDays] = useState<IDay[]>()

    useEffect(() => {
        // setDays(Array(getDaysSince("1991-09-27")).fill(""))

        setDays(generateDaysSinceBirth(birthDate, significantDates))
    }, [])

    function generateDaysSinceBirth(birthDate, significantDates) {
        const oneDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
        const currentDate = new Date() // Current date
        const providedBirthDate = new Date(birthDate) // Convert provided birth date string to Date object

        const daysSinceBirth = Math.floor(
            // @ts-ignore
            (currentDate - providedBirthDate) / oneDay
        ) // Calculate the number of days since birth
        const resultArray = new Array(daysSinceBirth + 1) // Create a new array with the length of days since birth

        for (let i = 0; i <= daysSinceBirth; i++) {
            const currentDate = new Date(
                providedBirthDate.getTime() + i * oneDay
            ) // Calculate the current date

            const matchingSignificantDate = significantDates.find(date => {
                return (
                    new Date(date.date).toDateString() ===
                    currentDate.toDateString()
                )
            })

            resultArray[i] = matchingSignificantDate
                ? matchingSignificantDate
                : null
        }

        return resultArray
    }

    return (
        <div className="xcontainer xw-8/12 mx-auto grid w-fit grid-cols-50">
            {days ? (
                <>
                    {days?.map((el, i) => {
                        return (
                            <Day key={i} day={el} i={i} total={days.length} />
                        )
                    })}
                </>
            ) : (
                <div className="center w-screen">
                    <FaSpinner className="animate-spin text-8xl text-white" />
                </div>
            )}
        </div>
    )
}

const Day = ({ day, i, total }: { day: IDay; i: number; total: number }) => {
    function convertRange(value, r1, r2) {
        return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0]
    }

    const color = () => {
        return `rgba(${convertRange(i, [0, total], [150, 100])}, ${convertRange(
            i,
            [0, total],
            [100, 150]
        )}, 200, 0.5)`
    }

    return (
        <div
            className="flex h-2 w-2 items-center justify-center sm:h-5 sm:w-5"
            onClick={() => console.log(day?.event, i)}
        >
            {day ? (
                <div
                    className={`${
                        !day.icon && "bg-gray-300"
                    } flex h-2 w-2 items-center justify-center rounded-full text-gray-50 transition-all hover:scale-150 sm:h-4 sm:w-4`}
                >
                    {day?.icon}
                </div>
            ) : (
                <div
                    className={`h-1 w-1 rounded-full sm:h-3 sm:w-3 `}
                    style={{
                        backgroundColor: color(),
                    }}
                />
            )}
        </div>
    )
}
