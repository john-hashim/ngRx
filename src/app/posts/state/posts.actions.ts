import { createAction, props } from "@ngrx/store";
import { post } from "src/app/models/post.model";

export const addPost = createAction('addPost', props<{ post: post }>())
export const updatePost = createAction('Update Post', props<{ post: post }>())
export const deletePost = createAction('deletePost', props<{id: string}>())