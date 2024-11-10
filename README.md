This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



This application is designed to simulate receiving SMS without needing to make requests to your live SMS server and counting against your quota.

Open [http://localhost:3000](http://localhost:3000) with your browser to see SMS caught if any.

## Learn More

To catch an SMS:

- Make a request to [http://localhost:3000/api/catch?to=PhoneNumber&from=SenderNameOrNumber&sms=HELLO](http://localhost:3000/api/catch?to=PhoneNumber&from=SenderNameOrNumber&sms=HELLO).
- You should see the SMS listed on [http:localhost:3000](localhost:3000).

## Configurations
Make sure to have configure your `.env` file and assigned values to `NEXT_PUBLIC_API_URL` and `DATABASE_URL` in your `.env` file.
