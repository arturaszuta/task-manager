require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d310e786fda6b12e8ada092').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5d31acd2239da244144bdd3e').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})