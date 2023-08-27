package com.MHunter.mhunter.service;

import com.MHunter.mhunter.model.PostData;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PostDataService {
    public PostData save(PostData postData);
    public List<PostData> viewAll();
    public PostData viewSpecific(int postId);
    public boolean delete(int postId);

    public String getPostData(int post_id);
}
