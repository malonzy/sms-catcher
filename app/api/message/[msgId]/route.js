import {PrismaClient} from "@prisma/client";

export async function GET(req,{params}){
    const {msgId} = await params

    if(!msgId || isNaN(Number(msgId))){
        return Response.json({
            status:'failed',
            message:'Invalid message ID'
        },{status:400})
    }

    const prisma = new PrismaClient()

    const message = await prisma.message.findUnique({
        where:{
            id:Number(msgId)
        }
    })

    return Response.json(message)
}