
// class Node {
//     constructor(data , next = null){
//         this.data = data;
//         this.next = next;
//     }
// // }
// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size++;
//     }
//     insertFirst(data){
//         this.head = new Node(data , this.head)
//     }

//     insertLast(data){
//         let node = new Node(data);
//         let current;

//         if(!this.head){
//             this.head =node;
//         }else{
//             current = this.head;

//             while (current.next) {
//                 current = current.next;

//             }
//             current.next = node;
//         }
//         this.size++
//     }


//     PrintListData(){
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next
//         }
//     }
    

//     insertIndex(data , index){
//         if(index > 0 && index > this.size){
//         return;
//         }
//         if(index === 0){
//             this.head = new Node(data , this.head)
//             return;
//         }
//         const node = new Node(data);
//         let current , previous;
        
//         current = this.head;
//         let count = 0;
        
//         while(count < index){
//             previous = current;
//             count++;
//             current = current.next;
//         }

//         node.next = current;
//         previous.next = node;

//         this.size++;
//     }
// }
// const ll = new LinkedList();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);
// ll.insertIndex(500 , 2)

// ll.PrintListData();

