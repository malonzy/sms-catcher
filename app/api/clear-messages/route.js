import {PrismaClient} from "@prisma/client";

export async function GET(){
    const prisma = new PrismaClient()

    const cleared = await prisma.message.deleteMany({})

    return Response.json({message:cleared});
}