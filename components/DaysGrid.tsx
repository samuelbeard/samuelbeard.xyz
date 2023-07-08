import { useEffect, useState } from "react"
import { LuBaby } from "react-icons/lu"
import { FaBaby } from "react-icons/fa6"
import { FaBirthdayCake } from "react-icons/fa"
import { GiLinkedRings } from "react-icons/gi"
import { TbParachute } from "react-icons/tb"

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
    // {
    //     date: "1993-09-27",
    //     event: "My second birthday",
    //     icon: <FaBirthdayCake />,
    // },
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
    {
        date: "2022-05-28",
        event: "Went skydiving",
        icon: <TbParachute />,
    },

    { date: "2013-03-22", event: "I got married", icon: <GiLinkedRings /> },
    // ... more significant dates
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
        <div className="xcontainer xw-8/12 w-fit mx-auto grid grid-cols-50">
            {days?.map((el, i) => {
                return <Day key={i} day={el} i={i} />
            })}
        </div>
    )
}

const Day = ({ day, i }: { day: IDay; i: number }) => {
    const bgColour = () => {
        if (i > 7847) return "bg-gray-300"
        if (i > 6575) return "bg-gray-200"

        return "bg-gray-100"
    }
    return (
        <div
            className="h-5 w-5 flex justify-center items-center"
            onClick={() => console.log(day?.event, i)}
        >
            {day ? (
                <div
                    className={`${
                        !day.icon && "bg-gray-600"
                    }  h-4 w-4 rounded-full`}
                >
                    {day?.icon}
                </div>
            ) : (
                <div className={`h-3 w-3 rounded-full ${bgColour()}`} />
            )}
        </div>
    )
}
