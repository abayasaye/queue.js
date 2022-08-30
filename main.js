// class Queue{
//     constructor(queueArray=[]){
//         this.queueArray = queueArray;
//     }
//     enqueue(...outlineArray){
//         console.log(this.queueArray.push(outlineArray[0]) );
//     }
//     dequeue(){
//         console.log(this.queueArray.splice(0,1));
//     }
//     print(){
//         console.log(queueArray);
//     }

// }
// let newQ = new Queue(["absy","dani","mali","soli"])
// newQ.enqueue("moli","dor","natan")
// console.log(newQ);
// class Stack{
//     constructor(StackArray=[]){
//         this.StackArray = StackArray;
// }
// add(...addStack){
//     console.log(this.StackArray.push(addStack[0]))
// }
// remove(){
//     console.log(this.StackArray.pop())
// }
// isEmpty(){
// return this.StackArray.length===0?true:false;
// }
// }
// const newSStack = new Stack(["sol","lior","asaye","malede"])
// newSStack.add("yosi","shimon","chen")
// console.log(newSStack.isEmpty())



// const sunView = (arrayNums)=>{
//     let index = [0]
//     for (let i = 0; i < arrayNums.length; i++) {
//         if (arrayNums[i]>arrayNums[index.length-1]) {
//             index.push(i)
//         }
        
//     } 
//     console.log(index);
// }
// sunView([3,5,8,7,9,6,10])








const SortArray = (array) => {
    for(let i=0; i<array.length ; i++){
    let isSwap = false;
for(let j=0 ; j<(array.length-1-i) ; j++){
if(array[j]>array[j+1]){
let temp = array[j];
array[j]=array[j+1];
array[j+1] = temp;
isSwap=true
}
}
if (!isSwap) {
    break;
}
}
return array;
}
console.log(SortArray([7,8,10,3,23,1,4,2,9]))


// let a =6 
// let b=2

// a = a*b//12
// b = a/b//6
// a = a/b//2

// a = a + b //8
// b = a - b // 6
// a  = a - b //2 

class Node {
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size++;
    }
    insertFirst(data){
        this.head = new Node(data , this.head)
    }

    insertLast(data){
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head =node;
        }else{
            current = this.head;

            while (current.next) {
                current = current.next;

            }
            current.next = node;
        }
        this.size++
    }


    PrintListData(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
    

    insertIndex(data , index){
        if(index > 0 && index > this.size){
        return;
        }
        if(index === 0){
            this.head = new Node(data , this.head)
            return;
        }
        const node = new Node(data);
        let current , previous;
        
        current = this.head;
        let count = 0;
        
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertIndex(500 , 2)

ll.PrintListData();