'use strict';
{
  // 変数宣言
  const fizz = document.getElementById('fizz');
  const buzz = document.getElementById('buzz');
  const exec = document.getElementById('exec'); //実行ボタン
  const result = document.getElementById('result'); //エラーメッセージ


  // ■■■ クリックイベント start ■■■
  exec.addEventListener('click', () => {

    // 整数判別式
    if(Number.isInteger(parseInt(fizz.value)) === false  || Number.isInteger(parseInt(buzz.value)) === false ){
      return result.textContent = "整数を入力してください";
    };

    // ■  倍数計算とコンソール出力処理
    // 入力値を変数に代入
    const fizzNum = parseInt(fizz.value,10);
    const buzzNum = parseInt(buzz.value,10);

    // 計算結果の格納変数
    let fizzResult = fizzNum;
    let buzzResult = buzzNum;

    // 両方の倍数が100を超えるまでループ処理
    while( fizzResult < 100 || buzzResult < 100){

      if( fizzResult === buzzResult ){
        console.log("FizzBuzz " + fizzResult );
        fizzResult += fizzNum;
        buzzResult += buzzNum;
      }else if ( fizzResult < buzzResult ) {
        console.log("Fizz " + fizzResult);
        fizzResult += fizzNum;
      }else if ( fizzResult > buzzResult ) {
        console.log("Buzz " + buzzResult);
        buzzResult += buzzNum;
      }else {
        console.log("エラーが発生しました。");
      };
    };
  });
  // ■■■ クリックイベント end ■■■
}
