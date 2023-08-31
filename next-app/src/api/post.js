const API = 'http://localhost:3000'


export const createPostRequest = (post) => 
    fetch(`${API}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': "application/json"
        }
    })
    

    export const addCommentRequest = (postId, content) => 
    fetch(`${API}/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(content),
        headers: {
            'Content-Type': "application/json"
        }
    })

    export const loginPostRequest = (user) => 
    fetch(`${API}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': "application/json"
        }
    })

    export const registerPostRequest = (newUser) => 
    fetch(`${API}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': "application/json"
        }
    })
    
export const getPostRequest = () => fetch(`${API}/posts`)

export const postLikeRequest = (postId, likes) => 
fetch(`${API}/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify(likes),
    headers: {
        'Content-Type': "application/json"
    }
})


export const deleteRequest = (postId) => 
  fetch(`${API}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': "application/json"
    }
  });


export const userPermsRequest = (userId) => 
  fetch(`${API}/auth/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': "application/json"
    }
  });


