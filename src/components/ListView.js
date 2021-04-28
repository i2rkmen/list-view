import React, { useEffect, useState } from 'react';
import { getPosts, getPostById, getPostsByUserId } from '../apis/Posts';
import { DetailViewModal } from './DetailViewModal';
import { Spinner } from './Spinner';



export const ListView = () => {
    const [posts, setPosts] = useState([]);
    const [showDetailView, setShowDetailView] = useState(false);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchPosts = async () => {
        setLoading(true);
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts)
        setLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleClick = async (postId) => {
        const fetchedPost = await getPostById(postId);
        setPost(fetchedPost);
        setShowDetailView(true);
    }

    const handleFilterChange = async (e) => {
        const userId = e.target.value;
        setPosts([]);
        if (!userId) {
            fetchPosts();
            return;
        }
        setLoading(true);
        const fetchedPosts = await getPostsByUserId(userId.trim());
        setPosts(fetchedPosts);
        setLoading(false);
    }

    return (
        <div className="list-view">
            <section className="list-view-content">
                <h1>List of posts' titles</h1>
                <div>
                    <span>Filter posts by user id: </span>
                    <input onChange={handleFilterChange} type="number" autoFocus={true}></input>
                </div>
                {loading && <Spinner />}
                {
                    posts && posts.map(post => (
                        <div className="list-item" key={post.id}>
                            <h4 onClick={() => handleClick(post.id)}>{post.title}</h4>
                        </div>
                    ))
                }
            </section>
            <DetailViewModal show={showDetailView} setShow={setShowDetailView} post={post} />
        </div>
    )

}