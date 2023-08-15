package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.Post;
import com.MHunter.mhunter.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImp implements PostService{
    @Autowired
    private PostRepository postRepository;

    @Override
    public int getPostID(int mmid) {
        return postRepository.findLastPostID(mmid);
    }

    @Override
    public List<Post> findBySpecificPosts(int mmid) {
        List<Post> posts = postRepository.findByMMID(mmid);
        return posts;
    }

    @Override
    public Post viewSpecificID(int pId) {
        Optional<Post> post = postRepository.findById(pId);
        return post.orElse(null);
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post) ;
    }

    @Override
    public List<Post> viewAll() {
        return postRepository.findAll();
    }

    @Override
    public boolean deletePost(int pId) {
        postRepository.deleteById(pId);
        return true;
    }
}
