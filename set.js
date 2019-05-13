var CustomSet = function () {

    this.collections = []

    /* checks the elements presence in the set */
    this.has = (value) => {
        return (this.collections.indexOf(value) !== -1)
    }

    /* returns all the values present in the set */
    this.values = () => {
        return this.collections
    }

    this.add = (value) => {
        if (!this.has(value)) {
            this.collections.push(value)
            return true
        }
        return false
    }

    this.remove = (value) => {
        if (this.has(value)) {
            index = collections.indexOf(value)
            this.collections.splice(index, 1)
            return true
        }
        return false

    }

    this.size = () => {
        return collections.length
    }

    this.union = (otherSet) => {
        let unionSet = new CustomSet()
        let firstSet = this.values()
        let secondSet = otherSet.values()
        firstSet.forEach(element => {
            unionSet.add(element)
        });
        secondSet.forEach(element => {
            unionSet.add(element)
        });
        return unionSet
    }

    this.intersection = (otherSet) => {
        let intersectionSet = new CustomSet()
        let firstSet = this.values()
        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element)
            }
        });
        return intersectionSet
    }

    this.difference = function (otherSet) {
        var differenceSet = new CustomSet();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    this.subset = function (otherSet) {
        var firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        });
    }

}

var setA = new CustomSet();  
var setB = new CustomSet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log('1',setA.subset(setB));
console.log('2',setA.intersection(setB).values());
console.log('3',setB.difference(setA).values());

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
