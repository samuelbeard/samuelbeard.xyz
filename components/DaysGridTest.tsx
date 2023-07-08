import React, { useState } from "react"

const birthDate = "1990-01-01"
const significantDates = [
    { date: "1990-01-01", event: "Birthday" },
    { date: "1990-01-05", event: "Achievement" },
    { date: "1990-01-10", event: "Meeting" },
    // ... more significant dates
]

const BirthDateGrid = () => {
    const oneDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
    const currentDate = new Date() // Current date
    const providedBirthDate = new Date(birthDate) // Convert provided birth date string to Date object

    const daysSinceBirth = Math.floor(
        (currentDate - providedBirthDate) / oneDay
    ) // Calculate the number of days since birth

    const startMonth = new Date(
        providedBirthDate.getFullYear(),
        providedBirthDate.getMonth(),
        1
    )
    const endMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    )
    const monthsSinceBirth =
        (endMonth.getFullYear() - startMonth.getFullYear()) * 12 +
        (endMonth.getMonth() - startMonth.getMonth())

    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleDotClick = date => {
        const matchingSignificantDate = significantDates.find(
            significantDate => significantDate.date === date
        )

        if (matchingSignificantDate) {
            setSelectedEvent(matchingSignificantDate.event)
        } else {
            setSelectedEvent(null)
        }
    }

    const renderGridDot = date => {
        const matchingSignificantDate = significantDates.find(
            significantDate => significantDate.date === date
        )
        const dotColor = matchingSignificantDate ? "red" : "black"

        return (
            <div
                key={date}
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: dotColor,
                    margin: "2px",
                    cursor: "pointer",
                }}
                onClick={() => handleDotClick(date)}
            ></div>
        )
    }

    const generateMonthGrid = (start, end) => {
        const monthGrid = []
        let currentMonth = new Date(start)

        while (currentMonth <= end) {
            const year = currentMonth.getFullYear()
            const month = currentMonth.getMonth() + 1
            const daysInMonth = new Date(year, month, 0).getDate()

            const monthLine = []
            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(year, month - 1, day)
                const currentDateStr = currentDate.toISOString().split("T")[0]

                monthLine.push(renderGridDot(currentDateStr))
            }

            monthGrid.push(monthLine)
            currentMonth.setMonth(currentMonth.getMonth() + 1)
        }

        return monthGrid
    }

    const monthGrid = generateMonthGrid(startMonth, endMonth)

    return (
        <div>
            {monthGrid.map((monthLine, index) => (
                <div key={index}>{monthLine}</div>
            ))}
            {selectedEvent && <p>Event: {selectedEvent}</p>}
        </div>
    )
}

export default BirthDateGrid
