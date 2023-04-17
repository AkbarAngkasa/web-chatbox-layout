// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import useCurrentPath from "../costumHooks/useCurrentPath"
import useDate from "../costumHooks/useDate";
import useTime from "../costumHooks/useTime";
import useFetchUser from "../costumHooks/useFetchUser";

export default function HeaderGreet(props){
    // const pathname = useCurrentPath().currentPathname;
    // const navigate = useNavigate();

    const [jargon, setJargon] = useState('');
    useEffect(() => {
        const jargons = ['Woo pretty excited!', 'Yass!', 'Lets Go!']
        setJargon(jargons[Math.floor(Math.random() * jargons.length)]);
    }, [])

    const jargonPaths = ['/dashboard/set-new-goal', '/dashboard/my-achievements'].includes(pathname);
    const { userData, loadUser } = useFetchUser(props);

    return(
        <div className="mb-4">
            {/* Pill */}
            {
                pathname !== '/dashboard' &&
                <button type="button" className="border-0 badge rounded-pill text-bg-primary mb-3" onClick={() => navigate(-1)}>
                    <i className="bi bi-chevron-compact-left text-light fw-bold"></i>
                </button>
            }
            {
                pathname === '/dashboard' &&
                <span className="badge rounded-pill text-bg-primary mb-3">
                    Dashboard
                </span>
            }
            {/* Jargon Header */}
            {
                // Static jargon
                !jargonPaths && userData && !loadUser &&
                <h2>✨Hello {userData.first_name.charAt(0).toUpperCase() + userData.first_name.slice(1)}</h2>
            }
            {
                // Dynamic jargon
                jargonPaths && 
                <h2>✨{jargon}</h2>
            }
            <hr />
            {/* Date and Time */}
            <span className="badge text-bg-success me-2" id="real-time-day">{useDate()}</span>
            <span className="badge text-bg-success" id="tickling-clock">{useTime()}</span>
            <hr />
        </div>
    )
}