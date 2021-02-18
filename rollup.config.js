import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'
import refresh from 'rollup-plugin-react-refresh'
import copy from 'rollup-plugin-copy'
import { extname } from 'path'
import presetEnv from '@babel/preset-env'
import presetReact from '@babel/preset-react'
import presetTypescript from '@babel/preset-typescript'
import presetRefresh from 'rollup-plugin-react-refresh'

const SOURCE_FOLDER = 'src'
const OUTPUT_FOLDER = 'dev'

function createConfig (inputFile, outputFile, minification) {
    const outputExtension = extname(outputFile)
    return {
        input: inputFile,
        output: [
            minification
                ? {
                      file: outputFile.replace(outputExtension, `.min${outputExtension}`),
                      format: 'cjs',
                      name: 'bundle',
                      plugins: [ terser() ]
                  }
                : {
                      file: outputFile,
                      format: 'cjs',
                      name: 'bundle'
                  }
        ],
        plugins: [
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                extensions: [ '.js', '.ts' ],
                presets: [ presetEnv, presetReact, presetTypescript ],
                env: {
                    development: {
                        plugins: [ 'react-refresh/babel' ]
                    }
                }
            }),
            refresh()
        ],
        watch: {
            include: `${SOURCE_FOLDER}/**`
        }
    }
}

function copyWithAssets (config) {
    !!config.plugins &&
        config.plugins.push(
            copy({
                targets: [
                    { src: `${SOURCE_FOLDER}/**/*.html`, dest: OUTPUT_FOLDER },
                    { src: 'package.json', dest: OUTPUT_FOLDER }
                ]
            })
        )
    return config
}

export default [
    copyWithAssets(createConfig('src/main.ts', `${OUTPUT_FOLDER}/metagraph.js`, false)),
    createConfig('src/react/app.ts', `${OUTPUT_FOLDER}/react.js`, false)
]
