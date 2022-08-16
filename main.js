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
class Stack{
    constructor(StackArray=[]){
        this.StackArray = StackArray;
}
add(...addStack){
    console.log(this.StackArray.push(addStack[0]))
}
remove(){
    
}
isEmpty(){

}
}
const newSStack = new Stack("sol","lior","asaye","malede")
newSStack.add("yosi","shimon","chen")