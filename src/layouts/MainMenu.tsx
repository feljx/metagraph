import React, { FunctionComponent } from 'react'
import { Button } from '../templates/Button'
import { ButtonGroup } from '../templates/ButtonGroup'
import { StyledProps } from '../types/StyledProps'

export const Menu: FunctionComponent<StyledProps> = (props) => {
    return (
        <ButtonGroup {...props} className="flex flex-row">
            <Button>File</Button>
            <Button>Edit</Button>
            <Button>View</Button>
            <Button>Settings</Button>
            <Button>Help</Button>
        </ButtonGroup>
    )
}
