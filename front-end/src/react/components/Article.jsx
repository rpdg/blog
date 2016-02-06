import React, {Component} from 'react'

import { AppData } from '../../util/AppData'

import { md2html } from '../../util/md'

import * as text from '../../consts/text'

class Article extends Component {
    constructor() {
        super()
    }

    render() {
        let { currentArticle } = this.props
        let currentArticleDOM = md2html(currentArticle.md)

        let difficultLevel = AppData.getDifficultLevelByGrade(currentArticle.grade)
        let dateStr = AppData.formatArticleDate(currentArticle.date)

        return (
            <div>
                <div className="article-info">
                    <label>{text.ARTICLE_DATE_LABEL_TEXT}</label>
                    <date>{dateStr}</date>
                    <label>{text.ARTICLE_DIFFCULT_LEVEL_TEXT}</label>
                    <div>{difficultLevel}</div>
                </div>

                <article className="markdown-body" dangerouslySetInnerHTML={{__html: currentArticleDOM}}>
                </article>
            </div>

        )
    }
}

export default Article