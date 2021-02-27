import React, { Fragment } from 'react'
import { SidePanel } from './SidePanel'
import { ProjectInfo } from './ProjectInfo'
import { ContentRouter } from './ContentRouter'
import { Content } from './Content'

export function WindowView (props: any) {
    return (
        <Fragment>
            <SidePanel className={[ 'w-3/12', 'flex-nowrap', 'bg-black' ]}>
                <ProjectInfo />
                <ContentRouter />
            </SidePanel>
            <Content />
        </Fragment>
    )
}
