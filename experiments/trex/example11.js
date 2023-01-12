function foo() {
        return there(hi)
}

function bar() {
        return
}

function hi() {
        return hello
}

function hello() {
        return
}

function there(x) {
        y = x()
        y()
        return bar
}

function buyNow(x) {
        addToCart(x)
}

function done() {
        return
}

function completeBuy() {
        console.log("Purchased")
        return done
}

function addToCart(y) {
        y()
}

var x = foo()
x()
x()
var y = hi()
y()
there(foo)

// buyNow(completeBuy)
// addToCart(completeBuy)    