import * as types from '../mutation_types'
import Vue from 'vue'

const state = {
	cartBooks: []
}

const mutations = {
	// add book to state.cartBooks if inexistence and set checked equal to true
	[types.BUY_BOOK] (state, book) {
		const index = state.cartBooks.findIndex(value => value.id === book.id);
		if (index === -1) {
			Vue.set(book, 'checked', true);
			state.cartBooks.push(book);
		}
	},
	// delete a book from state.cartBooks
	[types.DELETE_BOOK_FROM_CART] (state, book) {
		const index = state.cartBooks.findIndex(value => value.id === book.id);
		state.cartBooks.splice(index, 1)
	},
	[types.CLEAR_CART] (state) {
		state.cartBooks = [];
	},
	[types.SWITCH_BOOK_CHECK_STATE](state, book) {
		book.checked = !book.checked;
	},
	[types.SWITCH_ALL_BOOKS_CHECK_STATE](state, checkedAll) {
		if (checkedAll) {
			state.cartBooks.forEach(item => item.checked = false);
		} else {
			state.cartBooks.forEach(item => item.checked = true);
		}
	}
}

const actions = {
	buyBook({commit}, book) {
		commit(types.BUY_BOOK, book);
	},
	deleteBookFromCart({commit}, book) {
		commit(types.DELETE_BOOK_FROM_CART, book);
	},
	clearCart({commit}) {
		commit(types.CLEAR_CART);
	},
	switchBookCheckState({commit}, book) {
		commit(types.SWITCH_BOOK_CHECK_STATE, book);
	},
	switchAllBooksCheckState({commit}, checkedAll) {
		commit(types.SWITCH_ALL_BOOKS_CHECK_STATE, checkedAll);
	}
}

const getters = {
	cartBooks: state => state.cartBooks,
	checkedAll: state => state.cartBooks.every(value => value.checked),
	amountOfCheckedBooks: state => () => {
		let amount = 0;
		state.cartBooks.forEach(value => {
			if (value.checked) {
				amount += 1;
			}
		});
		return amount;
	},
	totalPriceOfCheckedBooks: state => () => {
		let totalPrice = 0;
		state.cartBooks.forEach(value => {
			if (value.checked) {
				totalPrice += parseInt(value.price);
			}
		});
		return totalPrice;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}