'use client'
import {useState} from "react";

const ClearMessages = ({qty}) => {
    const [status, setStatus] = useState("");
    const [clearing,setClearing] = useState(false)
    async function clearMessages(){
        setClearing(true)
        setStatus('')
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/clear-messages')
        if (res.status === 200){
            window.location.reload()
        }else{
            setStatus('Could not clear messages')
        }
    }

    return (
        <>
            <button onClick={clearMessages} className="bg-status-danger disabled:bg-status-danger/40 text-white disabled:text-white/20 p-3 rounded-md" disabled={qty === 0 || clearing}>{clearing ? 'Clearing messages...' : 'Clear Messages'}</button>
            {status}
        </>
    )
}

export default ClearMessages