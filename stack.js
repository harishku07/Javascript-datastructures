var Stack = function () {
    this.count = 0
    this.storage = []

    /* adds the element at the end of the stack */
    this.push = (value) => {
        this.storage[this.count] = value
        this.count++
        return true
    }

    /* removes and return the element at the end of the stack */
    this.pop = () => {
        if (this.count === 0) {
            return undefined
        }
        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    /* returns the size of the stack */
    this.size = () => {
        return this.count
    }

    /* returns the end element of the stack */
    this.peek = () => {
        return this.storage[this.count - 1]
    }
}


var stack = new Stack()

let word = 'aeea'
let reversedWord = ''

for (let i = 0; i < word.length; i++) {
    stack.push(word[i])
}

for (let i = 0; i < word.length; i++) {
    reversedWord+=stack.pop()
}

if(word===reversedWord){
    console.log(`${word} is a palindrome`)
}else {
    console.log(`${word} is not a palindrome`)
}
