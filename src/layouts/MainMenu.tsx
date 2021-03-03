import React, { FunctionComponent } from 'react'
import { Button } from '../templates/Button'
import { ButtonGroup } from '../templates/ButtonGroup'
import { ButtonWithMenu } from '../templates/ButtonWithMenu'
import { StyledProps } from '../types/StyledProps'

export const MainMenu: FunctionComponent<StyledProps> = (props) => {
    const buttons = Object.entries(menuButtonData).map(([ key, value ], idx) => {
        const hasMenuData = value.length > 0
        return hasMenuData ? (
            <ButtonWithMenu menuData={value} key={idx}>
                {key}
            </ButtonWithMenu>
        ) : (
            <Button key={idx}>{key}</Button>
        )
    })
    return (
        <ButtonGroup {...props} className="flex flex-row">
            {buttons}
        </ButtonGroup>
    )
}

interface MenuButtonData {
    [k: string]: string[]
}
const menuButtonData: MenuButtonData = {
    File: [
        'New Project',
        'New Window',
        'Open Project',
        'Open Recent',
        'Save',
        'Save As...',
        'Exit'
    ],
    Edit: [ 'Undo', 'Redo', 'Cut', 'Copy', 'Paste' ],
    Selection: [ 'Copy Styles', 'View Source' ],
    View: [ 'Zoom In', 'Zoom Out' ],
    Settings: [],
    Help: [ 'Quick Start', 'Reference', 'About' ]
}
