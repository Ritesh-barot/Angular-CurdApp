import { CommonModule } from '@angular/common';
import { Component, OnInit,ElementRef, ViewChild, createComponent  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import {Post} from '../post'
import {MatDialog} from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {

  posts:Post[]=[];
  @ViewChild('createPostModal') createPostModal!: ElementRef;
  constructor(public postService:PostService, private dialogref:MatDialog){}
  ngOnInit():void{
    console.log('IndexComponent initialized');
    this.postService.getAll().subscribe((data:Post[])=>{
      this.posts= data;
      console.log(this.posts);
     
    })
  }
  deletepost(id:number){
    this.postService.delete(id).subscribe(res =>{
      this.posts=this.posts.filter(item=>item.id !==id);
      alert('post delete Succesfully');
    })
  }
  openpop(){
    this.dialogref.open(CreateComponent);
  }
  
}
