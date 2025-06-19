import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {
  // Ensure params are awaited properly
  const { username } = await params;  // Make sure to await params

  const checkUser = async () => {
    await connectDb();
    let user = await User.findOne({ username });
    if (!user) {
      return notFound();
    }
  }

  await checkUser();

  return (
    <>
      <PaymentPage username={params.username} />
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  const { username } = await params;  // Ensure params are awaited properly

  return {
    title: `Support ${username} - Get Me A Chai`,
  }
}
