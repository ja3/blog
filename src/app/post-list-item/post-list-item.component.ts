import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit  {

  @Input() postTitle : string ;
  @Input() postContent : string ;
  @Input() postDate ;
  @Input() postLoveIT : number ;
  

  constructor(private postsService: PostsService) { }

 ngOnInit(){}

  onLoveIT(){
 return this.postLoveIT++ ;
  }
  onDontLoveIT(){
    return this.postLoveIT-- ;
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

 
}

