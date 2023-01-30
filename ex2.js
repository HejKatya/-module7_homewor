const isProp = (string, obj) => {
    return string in obj
}

const myObject = {
    hello: 'hello',
    goodbye: 'goodbye',
    cat: 'cat'
}

console.log(isProp('dog', myObject))