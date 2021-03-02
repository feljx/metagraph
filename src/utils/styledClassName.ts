export function styledClassName (className: string, classes: string | string[]) {
    let result = className || ''
    classes = classes instanceof Array ? classes : [ classes ]
    for (const cls of classes) {
        for (const realClass of cls.split(' ')) {
            result += ' ' + realClass
        }
    }
    return result.trim()
}
