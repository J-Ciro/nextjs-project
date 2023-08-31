"use client";
import Link from "next/link";
import styles from './NavBar.module.css'
import { UserAuth, useAuth } from "@/app/context/AuthContext";
import { auth } from "@/app/firebase/firebase";
import { redirect } from "next/navigation";

export default function NavBar() {

  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }

   
  }

  // console.log(user,'THIS IS NAVBAR')



  return (
    <div className={styles.container}>
      <nav >
        <ul className={styles.navbar}>
        <li>
              <Link href={'/'}>
                Home
              </Link>
            </li>
           {!user ? (
           <><li>
                <Link href={'/register'}>
                  Sign Up
                </Link>
              </li></>
        ) : (
          <><li>
                <Link href={'/feed'}>
                  Feed
                </Link>
              </li><span onClick={handleSignOut} className={styles.signOut}>Sign Out</span></>
        )}
        </ul>
     
      </nav>
      
    </div>
  );
}
