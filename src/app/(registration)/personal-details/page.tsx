
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/libs/irron-session';
import PersonalDetailsRegistration from '@/components/personal-details/form';
import { redirect } from 'next/navigation';

export default async function PersonalDetailsPage() {
  const session = await getIronSession<SessionData>(
    await cookies(),
    sessionOptions
  );

  // If session or applicantData is missing, redirect or return null
  if (!session || !session.applicantData) {
    redirect("/login")
  }

  return <PersonalDetailsRegistration applicantData={session.applicantData} />;
}
