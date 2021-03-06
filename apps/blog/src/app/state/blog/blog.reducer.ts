import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as BlogActions from "./blog.actions";
import { BlogEntity } from "./blog.models";

export const BLOG_FEATURE_KEY = "blog";

export interface State extends EntityState<BlogEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const blogAdapter: EntityAdapter<BlogEntity> =
  createEntityAdapter<BlogEntity>({
    sortComparer: (a: BlogEntity, b: BlogEntity) =>
      Number.parseInt(b.date) - Number.parseInt(a.date),
  });

export const initialState: State = blogAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const blogReducer = createReducer(
  initialState,
  on(BlogActions.loadBlogs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BlogActions.loadBlogsSuccess, (state, { blog }) =>
    blogAdapter.setAll(blog, { ...state, loaded: true })
  ),
  on(BlogActions.loadBlogsFailure, (state, { error }) => ({ ...state, error })),
  on(BlogActions.createBlogSuccess, (state, { blog }) =>
    blogAdapter.addOne(blog, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return blogReducer(state, action);
}
