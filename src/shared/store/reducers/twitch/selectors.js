import { createSelector } from 'reselect'

export const getStreamList = createSelector([
  (state) => state.twitch.list
],
(list) => list
)

export const getStreamLoading = createSelector([
  (state) => state.twitch.listLoading
],
(loading) => loading
)
