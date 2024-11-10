import {PrismaClient} from "@prisma/client";

export async function GET() {
    const prisma = new PrismaClient()

    const messages = await prisma.message.findMany({
        orderBy:[{
            id:'desc'
        }]
    })

    return Response.json(messages)
}