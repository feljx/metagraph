import React, { Component, createRef, RefObject, useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import { ConfigState } from '../../model/App'

interface Props {
    config: ConfigState
}

interface State {}

export function MetaCanvas (props: Props) {
    const ref = useRef(null)
    return <div />
}
