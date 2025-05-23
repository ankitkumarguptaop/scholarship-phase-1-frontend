import AddressComponent from '@/components/address-details/address';
import { SessionData, sessionOptions } from '@/libs/irron-session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Address() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  // If session or applicantData is missing, redirect or return null
  if (!session || !session.applicantData) {
    redirect("/login")
  }


  return <AddressComponent applicantData={session.applicantData} />;
 
}
