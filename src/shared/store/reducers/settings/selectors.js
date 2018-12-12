import { createSelector } from 'reselect'

export const getPerPageSelector = createSelector([
  (state) => state.settings.perPage
],
(perPage) => perPage
)
