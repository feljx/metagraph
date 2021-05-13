type PredicatedStyler = (predicatedData: any) => string

interface ConditionalStyles {
    [prop: string]: PredicatedStyler
}

const style = (
    general_styles: string,
    conditionalStyles: ConditionalStyles,
    props: any
) => {
    // Trim general styles template string
    // Including inner whitespace
    const whitespace = '\n\t\r '
    const trimmed_general_styles = general_styles
        .split('')
        .reduce((trimmed, char, index, char_array) => {
            const char_is_whitespace = whitespace.includes(char)
            // If character is not whitespace, add character
            if (!char_is_whitespace) return trimmed + char
            // Else
            const last_char = char_array[index - 1]
            const next_char = char_array[index + 1]
            const last_char_is_whitespace = whitespace.includes(last_char)
            // Add nothing if whitespace is first, last or repeating
            // Add one space for legit whitespace
            return !last_char || !next_char || last_char_is_whitespace
                ? trimmed
                : trimmed + ' '
        }, '')

    // Compute each conditional style using given props
    // Then join them
    const joined_conditional_styles = Object.entries(conditionalStyles)
        .map(([ prop, styler ]: [string, Function]) => styler(props[prop]))
        .join(' ')

    // Join and return all the styles
    const existing_classes = typeof props.className === 'string' ? props.className : ''
    return `${existing_classes} ${trimmed_general_styles} ${joined_conditional_styles}`
}

export { style }
