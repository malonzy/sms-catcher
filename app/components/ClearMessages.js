'use client'
import {clearMessages} from "@/app/actions";

const ClearMessages = ({qty}) => {
    return (
        <button onClick={clearMessages} className="bg-status-danger disabled:bg-status-danger/40 text-white disabled:text-white/20 p-3 rounded-md"
                disabled={qty === 0}>Clear Messages</button>
    )
}

export default ClearMessages