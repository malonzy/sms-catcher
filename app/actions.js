"use server"
import {redirect, RedirectType} from "next/navigation";

export async function clearMessages(){
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/clear-messages')
    if (res.status === 200){
        redirect('/',RedirectType.push)
    }else{
        return {
            status: 'failed',
            message:'Could not clear messages'
        }
    }
}