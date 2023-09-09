package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.PostData;
import com.MHunter.mhunter.repository.PostDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostDataServiceImp implements PostDataService{
    @Autowired
    private PostDataRepository postDataRepository;
    @Override
    public PostData save(PostData postData) {
        return postDataRepository.save(postData);
    }

    @Override
    public List<PostData> viewAll() {
        return postDataRepository.findAll();
    }

    @Override
    public PostData viewSpecific(int postId) {
        Optional<PostData> postData = postDataRepository.findById(postId);
        return postData.orElse(null);
    }

    @Override
    public boolean delete(int postId) {
        postDataRepository.deleteById(postId);
        return true;
    }

    @Override
    public String getPostData(int post_id) {
        return postDataRepository.findPostData(post_id);
    }
}
