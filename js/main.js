'use strict';
{
  // 変数宣言
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const exec = document.getElementById('exec'); //実行ボタン
  const result = document.getElementById('result'); //エラーメッセージ


  // ■■■ クリックイベント start ■■■
  exec.addEventListener('click', () => {

    const calculation =[];  // 計算結果格納変数
    // const p = document.createElement('p');  // 要素追加コード
    // p.textContent = '';

    // 整数判別式
    if(Number.isInteger(parseInt(fizz.value)) === false  || Number.isInteger(parseInt(buzz.value)) === false ){
      return result.textContent = "整数を入力してください";
    };

    // 入力値を100未満になるまで２倍にして配列に格納
    // fizzを計算
    for(let i = 1 ; fizz.value * i < 100 ; i++ ){
      calculation.push( fizz.value * i);
    }
    // buzzを計算
    for(let i = 1 ; buzz.value * i < 100 ; i++ ){
      calculation.push( buzz.value * i);
    }


    // 配列をソートする
    calculation.sort(function(a,b){
      if( a < b ) return -1;
      if( a > b ) return 1;
      return 0;
    });
    // console.log("ここにソートの配列");
    // console.log(calculation);


    // 重複を削除したリスト
    const fixedCalculation = calculation.filter(function (x, i, self) {
            return self.indexOf(x) === i;
        });
    // console.log("ここに重複削除したソート配列");
  	// console.log(fixedCalculation);


    // ソートして重複を削除した配列を表示
    fixedCalculation.forEach((calc) => {
      // コンソールログ出力
      // console.log(`配列の要素：${calc}`);
      if( calc % fizz.value === 0 && calc % buzz.value === 0  ){
        console.log("FizzBuzz " + calc);
      }else if ( calc % fizz.value === 0 ) {
        console.log("Fizz " + calc);
      }else if ( calc % buzz.value === 0 ) {
        console.log("Buzz " + calc);
      }else {
        return console.log("エラーが発生しました（出力処理にて）");
      };

    });

  });
  // ■■■ クリックイベント end ■■■
}
