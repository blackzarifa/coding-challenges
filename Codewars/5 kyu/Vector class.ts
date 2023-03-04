/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

a = new Vector([1, 2, 3])
b = new Vector([3, 4, 5])
c = new Vector([5, 6, 7, 8])

a.add(b)      # should return a new Vector([4, 6, 8])
a.subtract(b) # should return a new Vector([-2, -2, -2])
a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c)      # throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/
export class Vector {
  arr: number[];

  constructor(components: number[]) {
    this.arr = components;
  }

  equals(v: Vector): boolean {
    if (this.arr.length !== v.arr.length) return false;

    for (let i = 0; i < this.arr.length; i++)
      if (this.arr[i] !== v.arr[i]) return false;

    return true;
  }

  add(v: Vector): Vector {
    if (this.arr.length !== v.arr.length) throw new Error("Error: Vectors lenghts are different.");

    const res: number[] = [];

    for (let i = 0; i < this.arr.length; i++) {
      res[i] = this.arr[i] + v.arr[i];
    }

    return new Vector(res);
  }

  subtract(v: Vector): Vector {
    if (this.arr.length !== v.arr.length) throw new Error("Error: Vectors lenghts are different.");

    const res: number[] = [];

    for (let i = 0; i < this.arr.length; i++) {
      res[i] = this.arr[i] - v.arr[i];
    }

    return new Vector(res);
  }

  dot(v: Vector): number {
    if (this.arr.length !== v.arr.length) throw new Error("Error: Vectors lenghts are different.");

    let res: number = 0;

    for (let i = 0; i < this.arr.length; i++) {
      res += this.arr[i] * v.arr[i];
    }

    return res;
  }

  norm(): number {
    let res = this.arr.reduce((acc, x) => {
      acc += x ** 2;
      return acc;
    }, 0);
    return Math.sqrt(res);
  }

  toString(): string {
    return `(${this.arr})`
  }
};