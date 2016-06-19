import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'

import {createFolderComponent} from './Folder'

function main(sources) {
  const Folder = createFolderComponent({removable: false})
  return Folder(sources)
}

run(main, {DOM: makeDOMDriver('#app')})
