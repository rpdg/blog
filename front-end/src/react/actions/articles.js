import { LOAD_MUST_DATA, LOAD_ALL_ARTICLES, SHOW_MORE_ARITICLES } from '../../consts/ActionTypes'

export function loadMustDataAction(data) {
    return {
        type: LOAD_MUST_DATA,
        articles: data.articles,
        currentArticle: data.currentArticle,
        tags: data.tags
    }
}

export function loadAllArticlesAction(articles) {
    return {
        type: LOAD_ALL_ARTICLES,
        articles
    }
}

export function showMoreAriticleAction(number) {
    return {
        type: SHOW_MORE_ARITICLES,
        number
    }
}