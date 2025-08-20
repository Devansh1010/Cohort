const user = {
    name: "Devansh",
    email: "dev@gmail.com",
    id: '1223',
    phone: "12345467655"
}

const advanceUser = {
    name: "Devansh",
    email: "dev@gmail.com",
    id: '1223',
    phone: "12345467655",
    greet: function () {
        console.log('Hello')
    }
}

const proxyAdvanceUser = new Proxy(advanceUser, {

    get(target, p, receiver) { //! Read this reciver 

        const index = Number(p)
        if (p < 0 ) return target[target.length + index] 
        return target[p]
    },

    set(target, p, newValue) {

        if (p < 0 ) {
            const index = Number(p)
            return target[target.length + index] = newValue
        } else {
            target[p] = newValue
        }
        return true
    }

})

// proxyAdvanceUser.greet = () => {
//         console.log("changed")
// }

proxyAdvanceUser.greet()



const moreAdvanceUser = {
    name: "Devansh",
    email: "dev@gmail.com",
    id: '1223',
    phone: "12345467655",
    greet: function () {
        console.log('Hello')
    },
    marks: [1, 2, 3, 4, 5, 6]
}

const proxyMoreAdvaceUser = new Proxy(moreAdvanceUser, {

    get(target, p) {

        if (p == 'id') return "Not Allowed"
        return target[p]
    },

    set(target, p, newValue) {

        if (p === 'id') {
            return "Not allowed to change"
        } else {
            target[p] = newValue
        }
        return true
    }

})

// proxyMoreAdvaceUser.marks[2] = 223
// console.log(proxyMoreAdvaceUser.marks);


const proxyUser = new Proxy(user, {

    get(target, p) {

        if (p == 'id') return "Not Allowed"
        return target[p]
    },

    set(target, p, newValue) {

        if (p === 'id') {
            return "Not allowed to change"
        } else {
            target[p] = newValue
        }
        return true
    }

})

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const proxyArray = new Proxy(arr, {

    get(target, p) {
        const index = Number(p)
        if (p < 0 ) return target[target.length + index] 
        return target[p]
    },

    set(target, p, newValue) {

        if (p < 0 ) {
            const index = Number(p)
            return target[target.length + index] = newValue
        } else {
            target[p] = newValue
        }
        return true
    }

})

// proxyArray[-2] = 12
// proxyArray[3] = 22
// console.log(proxyArray[-2]);
// console.log(proxyArray[3]);
// console.log(arr);

