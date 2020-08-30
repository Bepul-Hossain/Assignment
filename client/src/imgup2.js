const Compress = require('compress.js')
const compress = new Compress()

const upload = document.getElementById('upload')

upload.addEventListener('change', (evt) => {
  const files = [...evt.target.files]
  compress.compress(files, {
    size: 4, // the max size in MB, defaults to 2MB
    quality: 0.75, // the quality of the image, max is 1,
    maxWidth: 1920, // the max width of the output image, defaults to 1920px
    maxHeight: 1920, // the max height of the output image, defaults to 1920px
    resize: true // defaults to true, set false if you do not want to resize the image width and height
  }).then((data) => {
    // returns an array of compressed images
    console.log(data)
  })
}, false)