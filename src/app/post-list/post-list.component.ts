import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
   
  posts = [
    {
      title: 'Mon premier post',
      content: 'Ceci est un commentaire pour le premier post , cool n est ce pas ',
      loveIts : 1 ,
      created_at : new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'Ceci est un commentaire pour le deuxieme post , cool n est ce pas ',
      loveIts : -1 ,
      created_at : new Date()
    },
    {
      title: 'Encore un post',
      content: 'Ceci est un commentaire pour le encore un post , cool n est ce pas ',
      loveIts : 0 ,
      created_at : new Date()
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
