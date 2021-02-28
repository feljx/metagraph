import React, { Fragment } from 'react'
import { SidePanel } from './SidePanel'
import { ProjectInfo } from './ProjectInfo'
import { ContentRouter } from './ContentRouter'
import { Content } from './Content'
import { TitleBar } from './TitleBar'
import { ApplicationMenu } from './ApplicationMenu'
import { WindowButtons } from './WindowButtons'
import { SideBar } from './SideBar'

export function WindowView (props: any) {
    return (
        <article className="flex w-full h-full">
            <TitleBar>
                <ApplicationMenu />
                <WindowButtons />
            </TitleBar>
            <TopBar>
                <SidePanelMenu />
                <RouteBrowser />
            </TopBar>
            <SidePanel className="w-1/4 min-w-0 flex-nowrap bg-gray-dark border-gray-darkest border-r-2">
                <ProjectInfo />
                <ContentRouter />
            </SidePanel>
            <Content className="w-full h-full bg-gray" />
        </article>
    )
}
