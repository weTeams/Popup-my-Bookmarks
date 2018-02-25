// @flow

import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

import * as TYPES from '../../types'
import {bookmarkTypes} from './actions'

const INITIAL_STATE = Immutable({
  copyId: '',
  cutId: '',
  dragId: '',
  focusId: '',
  searchKeyword: '',
  trees: []
})

type GetSearchResultPayload = {|
  searchKeyword: string
|}
const getSearchResult = (state, {searchKeyword}: GetSearchResultPayload) =>
  Immutable.merge(state, {searchKeyword})

type RemoveBookmarkTreesPayload = {|
  startIndex: number
|}
const removeBookmarkTrees = (state, {startIndex}: RemoveBookmarkTreesPayload) =>
  Immutable.set(state, 'trees', state.trees.slice(0, startIndex))

const removeFocusId = (state) => Immutable.set(state, 'focusId', '')

type SetBookmarkTreesPayload = {|
  bookmarkTrees: $ReadOnlyArray<TYPES.BookmarkTree>
|}
const setBookmarkTrees = (state, {bookmarkTrees}: SetBookmarkTreesPayload) =>
  Immutable.set(state, 'trees', bookmarkTrees)

type SetFocusIdPayload = {|
  focusId: string
|}
const setFocusId = (state, {focusId}: SetFocusIdPayload) => Immutable.merge(state, {focusId})

type SpliceBookmarkTreesPayload = {|
  bookmarkTrees: $ReadOnlyArray<TYPES.BookmarkTree>,
  index: number
|}
const spliceBookmarkTrees = (state, {index, bookmarkTrees}: SpliceBookmarkTreesPayload) =>
  Immutable.set(state, 'trees', state.trees.slice(0, index).concat(bookmarkTrees))

export const bookmarkReducer = createReducer(INITIAL_STATE, {
  [bookmarkTypes.GET_SEARCH_RESULT]: getSearchResult,
  [bookmarkTypes.REMOVE_BOOKMARK_TREES]: removeBookmarkTrees,
  [bookmarkTypes.REMOVE_FOCUS_ID]: removeFocusId,
  [bookmarkTypes.SET_BOOKMARK_TREES]: setBookmarkTrees,
  [bookmarkTypes.SET_FOCUS_ID]: setFocusId,
  [bookmarkTypes.SPLICE_BOOKMARK_TREES]: spliceBookmarkTrees
})
