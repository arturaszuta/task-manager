require('../src/db/mongoose')
const User = require('../src/models/user')

// 5d3103f47dcc23038c181932

// User.findByIdAndUpdate('5d3101672e61ad300c517612', { age : 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d3101672e61ad300c517612', 3).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})