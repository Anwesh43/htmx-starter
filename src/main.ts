import * as htmx from 'htmx.org'
import 'htmx.org'

document.body.addEventListener('htmx:load', (evt : any) => {
  console.log(evt)
})