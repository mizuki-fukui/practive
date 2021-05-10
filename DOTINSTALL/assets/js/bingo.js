'use strict';

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15];
const source = [];
for (let i = 0; i < 15; i++) {
  source[i] = i + 1;
}


const b = [];
b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
console.log(b);





// .splice() = Arrayオブジェクトのsplice()メソッドは、配列から要素を削除・追加して組み替えます
//Arrayオブジェクトのsplice()メソッドを実行すると、第一引数で指定した位置から、第二引数で指定した数の要素が配列から削除され、第三引数以降で指定した値が要素として配列に追加されます。
// .splice()の返り値は2つになることもあるので配列で返す
//　const b = []; で配列はすでに宣言してあるので[0]がなければ配列の中に配列で返ってくることになる
//そのため最後に[0]をつけることによって文字列で返してくれる　