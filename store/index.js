

export const state = () => ({
    themeState : '',
});

export const mutations = {

    setThemeState(state) {
        state.themeState = localStorage.getItem('storedData');
    },
};