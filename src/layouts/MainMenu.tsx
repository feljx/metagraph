import React, { FunctionComponent } from 'react'
import { Button } from '../templates/Button'
import { ButtonMenu, DropdownItemProps } from '../templates/Menu'
import { ButtonWithMenu } from '../templates/Button'
import { StyledProps } from '../types/StyledProps'
import { mixClassNames } from '../utils/mixClassNames'
import { app } from 'electron'

export const MainMenu = (props: StyledProps) => {
    const buttons = Object.entries(
        menuButtonData
    ).map(([ buttonLabel, itemProps ], idx) => {
        const hasMenuData = itemProps.length > 0
        return hasMenuData ? (
            <ButtonWithMenu itemProps={itemProps} key={idx}>
                {buttonLabel}
            </ButtonWithMenu>
        ) : (
            <Button key={idx}>{buttonLabel}</Button>
        )
    })

    const classes = [ 'flex flex-row' ]

    return (
        <ButtonMenu {...props} className={mixClassNames(props.className, classes)}>
            {buttons}
        </ButtonMenu>
    )
}

interface MenuButtonData {
    [k: string]: DropdownItemProps[]
}

const menuButtonData: MenuButtonData = {
    File: [
        { children: 'New Project' },
        { children: 'New Window' },
        { children: 'Open Project' },
        { children: 'Open Recent' },
        { children: 'Save' },
        { children: 'Save As...' },
        { children: 'Exit', onClick: () => app.quit() }
    ],
    Edit: [
        { children: 'Undo' },
        { children: 'Redo' },
        { children: 'Cut' },
        { children: 'Copy' },
        { children: 'Paste' }
    ],
    Selection: [ { children: 'Copy Styles' }, { children: 'View Source' } ],
    View: [ { children: 'Zoom In' }, { children: 'Zoom Out' } ],
    Settings: [],
    Help: [
        { children: 'Quick Start' },
        { children: 'Reference' },
        { children: 'About' }
    ]
}
