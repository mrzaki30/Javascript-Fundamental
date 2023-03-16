const todos = [
    {
        task: "tugas ke 1",
        status: false
    },
    {
        task: "tugas ke 2",
        status: true
    },
    {
        task: "tugas ke 3",
        status: false
    },
    {
        task: "tugas ke 4",
        status: false
    }
]
// const tugas = todos.filter(myFunction);

// function myFunction(value) {
//     if (value.status === false) {
//         return value
//     }
// }
const tugas = todos.filter(value => {
    if (value.status === false) {
        return value
    }
})

console.log(tugas);
