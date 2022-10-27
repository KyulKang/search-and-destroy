'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const head = linkedlist.head;

  let slow = head;
  let fast = head;

  //   let value = 0;

  //   switch (true) {
  //     case !head || !head.next:
  //       return false;
  //     case head.next === head:
  //       return true;
  //   }
  //if (!head || !head.next) return false;
  //if (head.next === head) return true;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
