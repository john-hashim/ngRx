import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostsComponent } from "./add-posts/add-posts.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { postReducer } from "./state/posts.reducers";
import { POST_STATE_NAME } from "./state/posts.selectors";

const routes: Routes = [
    {path: '', component: PostsListComponent, 
    children:[
      {path: 'add', component: AddPostsComponent},
      {path: 'edit/:id', component: EditPostComponent}
    ]
    }
]

@NgModule({
    imports:[
        CommonModule, 
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(POST_STATE_NAME, postReducer)
    ],
    declarations: [
        PostsListComponent,
        AddPostsComponent,
        EditPostComponent
    ]
})
export class PostsModule {}