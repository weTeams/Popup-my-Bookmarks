import webExtension from 'webextension-polyfill'

import classes from './no-search-result.css'

export default function NoSearchResult() {
  return (
    <p className={classes.main}>{webExtension.i18n.getMessage('noResult')}</p>
  )
}
