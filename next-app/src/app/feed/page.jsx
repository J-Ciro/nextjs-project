"use client";
import UsersPosts from "@/components/usersPosts/UsersPosts";
import styles from "./feed.module.css";
import AddPost from "@/components/addPostBtn/AddPost";
import { useAuth } from "../context/AuthContext";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";

export default function Feed() {
  const { user } = useAuth(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 50);
        setLoading(false);
      });
    };
    checkAuth();
  }, [user]);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        {loading ? (
          <Spinner />
        ) : user ? (
          <>
            <div className={styles.userProfile}>
              <figure>
                <img src={user.photo} alt="" />
              </figure>
              <span>{user.name}</span>
            </div>
            <section className={styles.addPost}>
              <div className={styles.addTitle}>
                <span>Crear nuevo post</span>
                <AddPost />
              </div>
            </section>
            <section className={styles.allPost}>
              <UsersPosts />
            </section>
          </>
        ) : (
          <p>Debes iniciar sesion para poder ver este contenido</p>
        )}
      </section>
    </main>
  );
}
