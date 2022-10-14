export const state = () => ({
    themeState : false,
});

export const mutations = {
    increment(state) {
        state.themeState = !themeState;
    },
};