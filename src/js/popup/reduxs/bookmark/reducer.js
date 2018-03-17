// @flow

import * as R from 'ramda'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

import type {BookmarkTree} from '../../types'
import {bookmarkTypes} from './actions'

const INITIAL_STATE = Immutable({
  clipboard: {
    id: '',
    isRemoveAfterPaste: false
  },
  dragId: '',
  focusId: '',
  searchKeyword: '',
  trees: []
})

type CopyBookmarkPayload = {| id: string |}
const copyBookmark = (state, {id}: CopyBookmarkPayload) =>
  Immutable.set(state, 'clipboard', {
    id,
    isRemoveAfterPaste: false
  })

type CutBookmarkPayload = {| id: string |}
const cutBookmark = (state, {id}: CutBookmarkPayload) =>
  Immutable.set(state, 'clipboard', {
    id,
    isRemoveAfterPaste: true
  })

type GetSearchResultPayload = {|
  searchKeyword: string
|}
const getSearchResult = (state, {searchKeyword}: GetSearchResultPayload) =>
  Immutable.merge(state, {searchKeyword})

type RemoveBookmarkTreesPayload = {|
  removeAfterId: string
|}
const removeBookmarkTrees = (state, {removeAfterId}: RemoveBookmarkTreesPayload) => {
  const removeAfterIndex = state.trees.findIndex(R.pathEq(['parent', 'id'], removeAfterId))
  if (removeAfterIndex < 0) return state

  return Immutable.set(state, 'trees', state.trees.slice(0, removeAfterIndex + 1))
}

const removeFocusId = (state) => Immutable.set(state, 'focusId', '')

const resetClipboard = (state) => Immutable.set(state, 'clipboard', INITIAL_STATE.clipboard)

type SetBookmarkTreesPayload = {|
  bookmarkTrees: $ReadOnlyArray<BookmarkTree>
|}
const setBookmarkTrees = (state, {bookmarkTrees}: SetBookmarkTreesPayload) =>
  Immutable.set(state, 'trees', bookmarkTrees)

type SetFocusIdPayload = {|
  focusId: string
|}
const setFocusId = (state, {focusId}: SetFocusIdPayload) => Immutable.merge(state, {focusId})

export const bookmarkReducer = createReducer(INITIAL_STATE, {
  [bookmarkTypes.COPY_BOOKMARK]: copyBookmark,
  [bookmarkTypes.CUT_BOOKMARK]: cutBookmark,
  [bookmarkTypes.GET_SEARCH_RESULT]: getSearchResult,
  [bookmarkTypes.REMOVE_BOOKMARK_TREES]: removeBookmarkTrees,
  [bookmarkTypes.REMOVE_FOCUS_ID]: removeFocusId,
  [bookmarkTypes.RESET_CLIPBOARD]: resetClipboard,
  [bookmarkTypes.SET_BOOKMARK_TREES]: setBookmarkTrees,
  [bookmarkTypes.SET_FOCUS_ID]: setFocusId
})
