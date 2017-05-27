import * as actionsList from '../actions-list'

const getters = {
    isSplashDisplayed: state => state.isDisplayed,
}

const state = {
    isDisplayed: true
}

const actions = {
    [actionsList.SEARCH_DONE] ({state}) {
        state.isDisplayed = false;
    }
}

export default {
    state,
    actions,
    getters
}
