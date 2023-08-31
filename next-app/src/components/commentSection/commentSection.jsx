"use client"
import UsersComments from '../usersComments/usersComments';
import styles from './commentSection.module.css'
import { useAuth } from "../../app/context/AuthContext";
import { useEffect, useState } from 'react';
import { addCommentRequest, getPostRequest } from '@/api/post';
export default function CommentSection({UserPostId}) {
    const {user} = useAuth();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    
    const [formData, setFormData] = useState(
      
      {
      userPhoto:user.photo,
      name:user.name,
      email:user.email,
      text: ''
    }
    
    );
    

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await getPostRequest();
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
        const checkAuth = async () => {
          await new Promise((resolve) => {
            setTimeout(resolve, 50);
            setLoading(false);
          });

        };
        checkAuth();
        fetchPosts();
      }, [user]);



      // const handleComment = async (event) => {
      //   event.preventDefault();
  
    
      //   try {
      //     const commentData = {
      //       usersComments: {
      //         userId: user.id,
      //         name: user.name,
      //         email: user.email,
      //         text: formData.text,
      //       },
      //     };
    
    
      //     const res = await addCommentRequest(UserPostId, commentData);
      //     const data = await res.json();
      //     console.log(data);
    
      //     // Fetch the updated comments after successfully posting the new comment
      //     fetchPosts();
    
      //     // Clear the comment input
      //     setComment('');
          
      //   } catch (error) {
      //     console.error('Error posting comment:', error);
      //   }
      // };

    return (
      
        <div>
            <section className={styles.userComment}>
                <figure>
                    <img src={user.photo} alt="" />
                </figure>
                <form className='flex w-100' style={{width: '100%'}}>
                    <input type="text" placeholder="Inscribe un comentario" 
                    // value={formData.text}
                  // onChange={(e) =>
                  // setFormData({ ...formData, text: e.target.value })}
                    />
                  <button className='bg-green-800 text-white rounded-lg p-1'>Enviar</button>
                 </form>
                
            </section>
            <section>
                {/* Aqui seria hacer un map para mostrar la foto y el comentario relaizado por la persona */}
                {/* <UsersComments/> */}
            </section>
        </div>

    );
  }
  