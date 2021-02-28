const red1 = '#ed2158'
const red2 = '#e53463'
const red3 = '#db3d67'

const a = '#FF6A92'
const b = '#553772'
const c = '#8f3b76'
const d = '#c7417b'
const e = '#f5487f'

const F = '#242433'
const G = '#2b2b36'
const H = '#3c3c4e'
const I = '#4f4f63'
const J = '#616170'

const U = '#fea10b'
const V = '#f8983f'
const W = '#e26940'
const X = '#4d7f80'
const Y = '#2f444b'
const Z = '#22282a'

const v = '#eb6115'
const w = '#f79e0c'
const x = '#118c8d'
const y = '#2c5766'
const z = '#163842'

const colors = (() => ({
    transparent: 'transparent',
    current: 'currentColor',
    red: {
        light: red1,
        DEFAULT: red2,
        dark: red3
    },
    green: {
        light: X,
        DEFAULT: Y,
        dark: Z
    },
    yellow: {
        light: U,
        DEFAULT: V,
        dark: W
    },
    gray: {
        darkest: F,
        dark: G,
        DEFAULT: H,
        light: I,
        lightest: J
    }
}))()

module.exports = { colors }
