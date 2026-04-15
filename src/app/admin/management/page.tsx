

'use client';

import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminPanel from "./AdminPanel"; 
import styles from '@/styles/app/admin/management/AdminPage.module.scss'; 
import ROUTES from '@/constants/routes';

const AdminPageContent = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push(ROUTES.AUTH_SIGNIN); 
  }, [session, status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
       <button 
  onClick={() => signOut({ 
    callbackUrl: `${window.location.origin}${ROUTES.AUTH_SIGNIN}`
  })} 
  className={styles.signOutButton}
>
  Sign Out
</button>
      </header>
      <AdminPanel />
    </div>
  );
};

const AdminPage = () => {
  return (
    <SessionProvider>
      <AdminPageContent />
    </SessionProvider>
  );
};

export default AdminPage;
