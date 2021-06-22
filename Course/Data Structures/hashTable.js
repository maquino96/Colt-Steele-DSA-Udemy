class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      let valuesArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
}
  
let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")
  

console.log(ht.keys())
console.log(ht.values())

// ht.keys().forEach(function(key){
// console.log(ht.get(key));
// })


// HASH FUNCTION EXAMPLE

function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}


// console.log(hash('test', 13))
// console.log(hash('checking', 13))
// console.log(hash('does', 13))
// console.log(hash('this', 13))
// // collision
// console.log(hash('work', 13))