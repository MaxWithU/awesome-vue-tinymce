import path from 'path'
import alias from 'rollup-plugin-alias'
import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import { uglify } from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize';

const pkg = require('./package.json')


let plugins = [
  alias({
    vue$: 'vue/dist/vue.common.js',
    '@': path.resolve('./src/'),
    resolve: ['.js', '.vue']
  }),
  vue(),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals(),
  filesize(),
  uglify()
]

let config = {
  
  input: './src/components/index.js',
  output: {
    banner: '/* awesome-vue-tinymce version ' + pkg.version + ' */\n',
    footer: '/* awesome-vue-tinymce version ' + pkg.version + ' */',
    file: './dist/AwesomeVueTinymce.js',
    format: ['umd'],
    name: 'awesome-vue-tinymce',
    sourcemap: false
  },
  external: ['vue', 'tinymce/tinymce'],
  plugins: plugins
}
export default config
