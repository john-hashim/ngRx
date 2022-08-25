import { createFeatureSelector, createSelector } from "@ngrx/store";
import { post } from "src/app/models/post.model";
import { PostState } from "./posts.state";

export const POST_STATE_NAME = 'posts'

const getPostState = createFeatureSelector<PostState>(POST_STATE_NAME)

export const getPosts = createSelector(getPostState, state => {
    return state.posts
})

export const getPostById = (id:any) => {
    return createSelector(getPostState, (state) => {
        const post:post = state.posts.find(post => post.id === id)!
        return post
    })
}