import dayjs from 'dayjs'
import ClearMessages from "@/app/components/ClearMessages";
export default async function Home() {
    let messages = []
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL+ '/all-messages')
        if (!res.ok) throw new Error('Network request failed')
        messages = await res.json()
    }catch(err){
        console.log(err)
    }

  return (
    <main className="w-8/12 mx-auto pt-5">
        <ClearMessages qty={messages.length}/>
        {messages.length > 0 && messages.map((message,index) => (
            <div key={index} className="bg-neutral-background/10 flex gap-10 my-5 rounded-xl p-5">
                <div>
                    <p className="text-sm text-primary-base">Sent to</p>
                    <p className="text-neutral-background">{message.receivingNumber}</p>
                </div>
                <div>
                    <p className="text-sm text-primary-base">Sender</p>
                    <p className="text-neutral-background">{message.sender}</p>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-primary-base">Message</p>
                    <p className="text-neutral-background">{message.message}</p>
                </div>
                <div>
                    <p className="text-sm text-primary-base">Time</p>
                    <p className="text-neutral-background text-nowrap">{dayjs(message.createdAt).format('D MMM YYYY,HH:mm:s')}</p>
                </div>
            </div>
        ))}
        {messages.length === 0 &&
            <div className="text-center py-20 bg-white/10 border border-white/15 w-8/12 rounded-xl my-10 mx-auto">
                No messages to show yet
            </div>
        }
    </main>
  );
}
