// @flow

import * as R from 'ramda'

import folderIcon from '../../../../../../img/folder.png'
import {ROOT_ID} from '../../../../../common/constants'
import * as CST from '../../../../constants'
import * as TYPES from '../../../../types'

const getIconUrl = (bookmarkInfo: TYPES.BookmarkInfo): string => {
  if (bookmarkInfo.type === CST.TYPE_FOLDER) return folderIcon
  if (bookmarkInfo.type === CST.TYPE_SEPARATOR) return ''
  if (bookmarkInfo.url) return `chrome://favicon/${bookmarkInfo.url}`
  return ''
}

const getType = (BookmarkNode: TYPES.BookmarkNode): string => {
  if (!BookmarkNode.url) return CST.TYPE_FOLDER
  if (BookmarkNode.url.startsWith(CST.SEPARATE_THIS_URL)) return CST.TYPE_SEPARATOR
  return CST.TYPE_BOOKMARK
}

const isRoot = (BookmarkNode: TYPES.BookmarkNode): boolean =>
  BookmarkNode.id === ROOT_ID || BookmarkNode.parentId === ROOT_ID

export const simulateBookmark = (partialBookmarkInfo: Object): TYPES.BookmarkInfo => ({
  ...partialBookmarkInfo,
  parentId: '',
  title: '',
  url: '',
  storageIndex: -1,
  isRoot: false,
  isUnmodifiable: true
})

export const toBookmark = R.compose(
  (bookmarkInfo: TYPES.BookmarkInfo): TYPES.BookmarkInfo => ({
    ...bookmarkInfo,
    iconUrl: getIconUrl(bookmarkInfo)
  }),
  (BookmarkNode: TYPES.BookmarkNode): TYPES.BookmarkInfo => ({
    id: BookmarkNode.id,
    parentId: BookmarkNode.parentId || '',
    title: BookmarkNode.title,
    url: BookmarkNode.url || '',
    iconUrl: '',
    storageIndex: typeof BookmarkNode.index === 'number' ? BookmarkNode.index : -1,
    type: getType(BookmarkNode),
    isRoot: isRoot(BookmarkNode),
    isUnmodifiable: isRoot(BookmarkNode) || Boolean(BookmarkNode.unmodifiable)
  })
)
