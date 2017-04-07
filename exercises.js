function createNode(data=null, next=null) {
    return {
        data,
        next
    };
}

class Stack {
    constructor() {
        this.top = null;
        this.length ==0;
    }

    push(data) {
        //if the top of the stack is empty, then the data will be the
        //top of the stack
        if (this.top === null) {
            this.top = createNode(data);
            this.length = 1;
            return;
        }

        //if the top already has something then create a new node
        //add data to the new node
        // have the pointer point to the top
        const node = createNode(data, this.top);
        this.top = node;
        this.length++
    }
    pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    this.length--;
    return node.data;
}
}

function peek() {
    //if the top of the stack does not have anything
    //then the stack is empty
    //otherwise return what's on the top
    if (s.top === null) {
        return null;
    }
    return s.top.data;
}

function display(newStack) {
    // displays the entire contents of the stack
    let node = newStack.top;
    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
}
function count(stack, input) {
  let counter = 0;
  stack.push(input);
  counter++
  console.log(counter, input)
}


function isPalindrome(string) {
  var newStack = new Stack();
  for (var i = 0; i < string.length; i++){
  newStack.push(string[i])
}
  var reverseWord = "";
  while(newStack.length > 0) {
    reverseWord += newStack.pop();
  }
  if (string === reverseWord) {
    return true;
  }
  else {
    return false;
  }
}


console.log(isPalindrome("dad"))

function parenthesesCheck(data) {
  let newStack2 = new Stack();
  let parenCount = 0;
  let bracketCount = 0;
  let curlyBraceCount = 0;
  for(var i = 0; i < data.length; i++){
    newStack2.push(data[i])
    switch(data[i]){
      case data[i] === "(":
        parenCount++;
        break;
      case data[i] === "{":
        curlyBraceCount++;
        break;
      case data[i] === "[":
        bracketCount++;
        break;
      case data[i] === ")":
        parenCount--;
        break;
      case data[i] === ")":
        curlyBraceCount--;
        break;
      case data[i] === "]":
        bracketCount--;
        break;
    }
  }
  if(parenCount !== 0 && bracketCount !== 0 && curlyBraceCount !== 0){
    return false;
  }
  else {
    return true;
  }
 }

console.log(parenthesesCheck('(dfjkdladsf'))
