import { useEffect, useState } from 'react';
import styles from './usersComments.module.css'
import { useAuth } from '@/app/context/AuthContext';
import { getPostRequest } from '@/api/post';
export default function UsersComments() {

  const [posts, setPosts] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostRequest();
        const data = await response.json();
        setPosts(data);
        console.log(data, 'POST FROM COMMENTS'); // Log the fetched data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    fetchPosts();
  }, []);

  return (
  
  
  <div className={styles.main}>
      <div className={styles.userInfo}>
        <figure>
          <img
            src="https://avatars.dicebear.com/api/open-peeps/sara.svg"
            alt=""
          />
        </figure>
        <span className={styles.usersName}>Sara</span>
      </div>
      <div className={styles.usersComment}>
        <p>Yo quisiera participar de la caminata!!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error deserunt alias ipsa animi quidem unde reiciendis amet, maiores dolor doloremque consectetur beatae nisi quo nam cumque hic pariatur nihil!
        A quidem quaerat doloribus. Eveniet similique porro harum eius vel officiis quibusdam incidunt cum doloremque ratione natus, sequi tempora, perferendis neque nulla quisquam quasi omnis? Sunt quaerat ex illo vitae.
       </p>
      <div className={styles.userCommentDate}>
        <span>2023/08/12 8:00PM</span>
        <button className={styles.trashBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
      </div>
      
      </div>
    </div>
  );
}
