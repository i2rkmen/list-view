const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        console.log('data', data)
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

export const getPostById = async (postId) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`);
        const data = await response.json();
        console.log('data', data)
        return data;
    } catch (error) {
        console.log(error.message)
    }
}


export const getPostsByUserId = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/?userId=${userId}`);
        const data = await response.json();
        console.log('data', data)
        return data;
    } catch (error) {
        console.log(error.message)
    }
}