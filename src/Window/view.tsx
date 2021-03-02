import React, { Fragment } from 'react'
import { Content } from '../layouts/Content'
import { TitleBar } from '../layouts/TitleBar'

export function WindowView (props: any) {
    return (
        <article className="flex flex-col w-full h-full">
            <TitleBar className="w-full" />
            {/* <Content className="flex-grow" /> */}
        </article>
    )
}
