

'use client';

import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminPanel from "./AdminPanel"; 
import styles from './AdminPage.module.scss'; 

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
		document.documentElement.setAttribute("data-theme", "dark");
	  }, []);
  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/auth/signin"); 
  }, [session, status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
       <button 
  onClick={() => signOut({ 
    callbackUrl: `${window.location.origin}/auth/signin`
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

export default AdminPage;
