import 'normalize.css/normalize.css'
import '../sass/style.sass'
import { accordion } from './accordion'
import { onDocumentReady, importAll } from './functions.js'
import { swiperSlider } from './slider'
import { counters } from './counter'
import { carusel } from './carusel'
import { caruselGoods } from './caruselGoods'
import { swiperGood } from './sliderGood'

importAll(
  require.context(
    '../../public',
    true,
    /\.(png|svg|jpg|jpe?g|gif|mov|mp4|ico|webmanifest|xml)$/
  )
)

onDocumentReady(function () {
  console.log('hello.')
})


swiperSlider()
carusel()
caruselGoods()
swiperGood()

accordion()

counters()

