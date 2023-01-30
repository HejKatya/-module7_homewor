const ownProp = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
            console.log(obj[key])
        }
    }
}

const myObject = {
    1: 9,
    2: 'hello',
    3: true
}

const yourObject = Object.create(myObject)
yourObject.bye = 'goodbye'
yourObject.hello = 'hi'

ownProp(yourObject)
