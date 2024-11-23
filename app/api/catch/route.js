import {PrismaClient} from "@prisma/client";
export async function GET(req){
    /* const {phoneNumber,message} = await req.json();

   if (!phoneNumber || phoneNumber.length < 4 || isNaN(Number(phoneNumber))){
        return Response.json({
            message:'Provide a valid phone number at least 4 characters long',
        },{status:422});
    }
    if (!message || message.length < 4){
        return Response.json({
            message:'Provide a message that\'s more than 4 characters long',
        },{status:422});
    }*/

    const searchParams = req.nextUrl.searchParams
    const to = searchParams.get('to')
    const from = searchParams.get('from')
    const message = searchParams.get('sms')

    if (!to || !from || !message) {
        return Response.json({
            code:'failed',
            message:'Query params `to`, `from` and `sms` required'
        })
    }

    const prisma = new PrismaClient()

    const createdData = await prisma.message.create({
        data:{
            message,
            receivingNumber:to,
            sender:from
        }
    })

    if (!createdData){
        return Response.json({
            message:'Message could not be saved',
            code:'fail'
        },{status:500})
    }

    return Response.json({
        message:'Message caught',
        code: 'ok'
    })
}