import React, {useState, useEffect} from 'react';
import './style.css';

export default function App() {
  const [pwd, setPwd] = useState("")
  const [cpwd, setCpwd] = useState("")
  const array = [1, 22, 2, 73, 44, 5, 6, 7, 57, 8, 8, 2, 22, 1, 22];

  // make array unique
  const uniqueArray = [...new Set(array)];
  console.log('Unique array ---> ', [...new Set(array)]);

  // get count of duplicates from array
  let obj = {};
  array.forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
  });

  const countOfDupUsingReduce = array.reduce((acc, cur, i) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  console.log('count of duplicates with normal loop ----> ', obj);
  console.log('count of duplicates using reduce ----> ', countOfDupUsingReduce);

  let maxKey = 0;
  let maxRepeatedKey;
  for (const [key, value] of Object.entries(obj)) {
    if (value > maxKey) {
      maxKey = value;
      maxRepeatedKey = key;
    }
  }
  console.log('maxKey, maxRepeatedKey ---> ', maxKey, maxRepeatedKey);

  //sum of array
  //reduce --> knowledge
  const sum = array.reduce((acc, cur, i) => {
    acc += cur;
    return acc;
  }, 0);

  // fresher logic
  let sumValue = 0;
  array.forEach((x) => {
    sumValue += x;
  });

  console.log('Sum ---> ', sum);
  console.log('sumValue ---> ', sumValue);

  // sort array with & without sort()
  const sorted = uniqueArray.sort((a, b) => a - b);
  console.log('Sort using sort function ---> ', sorted);

  function bubbleSort(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }
  bubbleSort(uniqueArray);
  console.log('Sorted without sort() ---> ', uniqueArray);

  let a = 5;
  let b = 10;
  console.log('A => ', { b: a, a: b }.a, 'B =>', { b: a, a: b }.b);

  let sample = true;
  console.log(sample + true);
  console.log(sample + undefined);
  console.log(sample + 1);
  console.log(sample + null);
  console.log(sample + 0);

  console.log('500' + 30 - 100);
  console.log('1' + 1);

  for (let i = 0; i < 3; i++) {
    // setTimeout(() => {
    //   console.log(i);
    // }, 3000);
  }
  const sentence = 'My name is React';
  //tcaeR si eman yM //op1
  //yM eman si tcaeR //op2
  const stringArr = sentence.split(' ').reverse();
  let output1 = "";
  for(let i = 0; i<stringArr.length; i++){
    output1 += `${stringArr[i].split("").reverse().join("")} `
  }
  console.log(output1)
  console.log(output1.split(" ").reverse().join(" "))

  // const arr = "myNameis"
  // const findStr = "isy"
  // unsolved / pending

  const obj2 = {
    user : {
      address : {
        city : "VSP",
        street : "random"
      }
    }
  }
  let newObj = JSON.parse(JSON.stringify(obj2));
  // let newObj = obj2;

  delete newObj.user.address.city
  console.log(obj2, newObj)

  useEffect(()=> {
    if(pwd === cpwd){
      console.log("MATCHING")
    }else{
      console.log("NOT MATCHING")
    }
  }, [pwd, cpwd])

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" placeholder="Password" value={pwd} onChange={(e) => {
        setPwd(e.target.value)
      }} />
      <br />
      <input type="text" placeholder="Confirm Password" value={cpwd}  onChange={(e) => {
        setCpwd(e.target.value)
      }} />
    </div>
  );
}
