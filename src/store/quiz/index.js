import {UPDATE_INFORMATION} from './mutations'
const state = {
	newQuiz: {
		title: "Quiz 2018",
		description: 100,
		questions: [
			{
				question: "First question",
				points: "First points",
				answers: [
					{
						answer: "First answer"
					}
				]
			}
		]
	}
};
const getters = {
	newQuiz: ({newQuiz}) => newQuiz
};

const mutations = {
	[UPDATE_INFORMATION](state, info) {
		state.newQuiz.title = info.title;
		state.newQuiz.description = infor.description;
	}
};

const actions = {

};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}
