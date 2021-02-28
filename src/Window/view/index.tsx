import React, { Fragment } from 'react'
import { SidePanel } from './SidePanel'
import { Content } from './Content'
import { TitleBar } from './TitleBar'
import { TopBar } from './TopBar'

export function WindowView (props: any) {
    return (
        <article className="grid grid-cols-2 grid-rows-3">
            <TitleBar className="row-span-2" />
            <TopBar />
            <SidePanel />
            <Content />
        </article>
    )
}
