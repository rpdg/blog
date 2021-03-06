import './util/resize-rem'

import React from 'react'
import { render } from 'react-dom'
import configureStore from './react/store/createConfigureStore'

import Root from './react/containers/root/Root'
import { AppData } from './util/AppData'
import { loadGoogle } from './util/google'
import { loadAllArticlesAction } from './react/actions/articles'

let { loadAllArticles } = AppData

let serverState

if (window.__INITIAL_STATE__) {
    serverState = window.__INITIAL_STATE__
}

let store = serverState ? configureStore(serverState) : configureStore()

let pRender = new Promise((resolve) => {
    render(
        <Root store={store} />,
        document.getElementById('root')
    )
    resolve()
})

pRender.then(loadAllArticles)
    .then(allArticles => {
        store.dispatch(loadAllArticlesAction(allArticles))
    })
    .then(loadGoogle)
    .catch(error => {
        if (error) {
            console.log(error)
            throw error
        }
    })
