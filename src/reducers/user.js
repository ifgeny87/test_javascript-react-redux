const initialState = {
    count: 0,
    get name() {
        return 'Anonymous #' + ++this.count;
    }
};

export default function user(state = initialState) {
    return state;
}