import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: post
  postForm!: FormGroup;
  postSubscription!: Subscription
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.postSubscription = this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        this.store.select(getPostById(id)).subscribe(data => {
          this.post = data
          this.createForm()
        })
    })
  }

  createForm(){
    if(this.post){
      this.postForm = new FormGroup({
        title: new FormControl(this.post.title, [Validators.required]),
        description: new FormControl(this.post.description, [Validators.required])
      })
    }
  }

  onUpdatePost(){
      const title = this.postForm.value.title;
      const description = this.postForm.value.description
      const post:post = {
        id: this.post.id,
        title, 
        description
      }
      this.store.dispatch(updatePost({post}))
      this.router.navigate(['posts'])
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
