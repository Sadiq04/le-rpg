export default {
    addClass: ({ commit }, newClass) => {
        commit("appendClass", newClass)
     },
}