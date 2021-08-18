import * as React from "react";

export interface IAppProps {
  number: number;
}

function fibonacci(n: number): number {
  //1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12   Number 
  //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, Expected result
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

export function Fibbo(props: IAppProps) {
  let x = fibonacci(props.number);
  console.log(x);
  return (
    <div>
      <p>Fibonacci result: {x}</p>
    </div>
  );
}
