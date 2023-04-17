import moment from "moment";
import { useState } from "react";

export default function useDate() {
    const [date, setDate] = useState(moment().format('h:mm:ss a'));

    setInterval(() => {
        return setDate(moment().format('h:mm:ss a'));
    }, 1000)

    return date
}
