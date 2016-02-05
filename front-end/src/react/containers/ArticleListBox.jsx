import React, { Component } from 'react'
import { connect } from 'react-redux'

import { appData } from '../../data'

import ArticleList from '../components/ArticleList'
import InvalidUrl from '../components/InvalidUrl'

import { INVALED_TAG_URL_TIP } from '../../consts/tips'

class ArticleListBox extends Component {
    constructor() {
        super()
    }
    render() {
        let allArticles = this.props.articles
        const tagId = this.props.params._id
        let articles = appData.getAriclesByTagId(allArticles, tagId)

        if (articles === undefined) {
            return (
                <InvalidUrl info={INVALED_TAG_URL_TIP} />
            )
        }

        return (
            <div>
                <ArticleList articles={articles}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { articles } = state
    return {
        articles
    }
}

export default connect(mapStateToProps)(ArticleListBox)
