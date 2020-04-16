export const ADD = "ADD"
export const REPORT = "REPORT"

export const add = (value) =>({
    type:ADD,
    payload:value
})

export const report = (value) =>({
    type:REPORT,
    payload:value
})