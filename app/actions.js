"use server"
import {revalidatePath} from "next/cache";

export async function clearMessages(){
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/clear-messages')
    if (res.status === 200){
        revalidatePath('/')
    }else{
        return {
            status: 'failed',
            message:'Could not clear messages'
        }
    }
}