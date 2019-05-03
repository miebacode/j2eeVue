import * as types from '../mutation_types'
import axios from 'axios'

const state = {
  topics: [],
  topicBooks: {}
}

const mutations = {
  [types.RECEIVE_TOPICS] (state, data) {
    state.topics = data.topics;
    state.topicBooks = data.topicBooks;
  }
}

const actions = {
  fetchTopics ({commit}, url) {
    axios.get(url)
    .then(res => commit(types.RECEIVE_TOPICS, res.data));
  }
}

const getters = {
  topics: state => state.topics,
  getTopicBooksByTopicName: state => topicName => state.topicBooks[topicName],
  getPartTopicBooksByTopicName: state => topicName => state.topicBooks[topicName].filter((book, index) => index < 8)
}

export default {
  state,
  mutations,
  actions,
  getters
}