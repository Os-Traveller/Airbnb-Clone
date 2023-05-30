import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prismaDb from '@/app/libs/prismaDb';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    // no user in cookies
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prismaDb.user.findUnique({
      where: { email: session?.user?.email as string },
    });

    // user does not exist in database
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
