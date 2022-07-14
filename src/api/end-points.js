export default {
    getShifts: "/shifts",
    singleShift: (id) => `/shifts/${id}`,
    bookShift: (id) => `/shifts/${id}/book`,
    cancelShift: (id) => `/shifts/${id}/cancel`
}