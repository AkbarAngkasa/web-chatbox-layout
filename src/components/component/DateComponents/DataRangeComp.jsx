import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import moment from 'moment'

const DateRangeComp = () => {

    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: moment().add(7, 'd')._d,
            key: 'selection'
        }
    ])

    const [isDate, setIsDate] = useState(false);

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }

    const dateArr = useRef(null);

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const dateValueHandler = () => {
        let dateRangeInput = document.getElementById('date-range-input').getAttribute('value');
        let dateRangeArr = dateRangeInput.split(' ');
        dateArr.current = dateRangeArr
        
        if(dateRangeArr.length > 2){
            console.log(dateRangeArr.slice(0, 3))
            console.log(dateRangeArr.slice(4, 7))
        }
    }

    return (
        <>
            <input
                id="date-range-input"
                value={
                    isDate ?
                    `${moment(range[0].startDate).format('DD MMMM YYYY')} - ${moment(range[0].endDate).format('DD MMMM YYYY')}`
                    :
                    `Select Date`
                }
                readOnly
                className="w-full px-4 inline-block py-2.5 text-sm font-medium text-gray-900 border border-slate-400 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onClick={() => {
                    setOpen(open => !open)
                }}
            />

            <div ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => {
                            setRange([item.selection])
                            setIsDate(true)
                            dateValueHandler()
                        }}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calendarElement "
                    />
                }
            </div>
        </>
    )
}

export default DateRangeComp