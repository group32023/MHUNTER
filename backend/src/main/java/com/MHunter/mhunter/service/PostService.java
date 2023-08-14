package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Post;

import java.util.List;

public interface PostService {
    public Post save(Post post);
    public List<Post> viewAll();

    public boolean deletePost(int pId);

    public Post viewSpecificID(int pId);

    public List<Post> findBySpecificPosts(int mmid);

    public int getPostID(int mmid);
}
