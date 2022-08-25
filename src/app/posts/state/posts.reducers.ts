import { createReducer, on } from "@ngrx/store"
import { addPost, deletePost, updatePost } from "./posts.actions"
import { initialState } from "./posts.state"

const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = {...action.post}
        post.id = `${(state.posts.length) + 1}`
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const updatePost = state.posts.map(post => {
            return action.post.id == post.id ? action.post: post
        })
        return {
            ...state,
            posts: updatePost
        }
    }),
    on(deletePost, (state, { id }) => {
        const updatedPosts = state.posts.filter(post => {
            return post.id !== id;
        })
        return {
            ...state,
            posts: updatedPosts
        }
    })

)

export function postReducer(state: any, action: any){
    return _postReducer(state, action)
}