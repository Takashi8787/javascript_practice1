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
    const fizzNum = fizz.value;
    const buzzNum = buzz.value;

    // 倍数の値
    let fizzFlg = 1;
    let buzzFlg = 1;

    // 両方の倍数が100を超えるまでループ処理
    while( fizzNum * fizzFlg < 100 || buzzNum * buzzFlg < 100){

      if( fizzNum * fizzFlg === buzzNum * buzzFlg ){
        console.log("FizzBuzz " + fizzNum * fizzFlg);
        fizzFlg++;
        buzzFlg++;
      }else if ( fizzNum * fizzFlg < buzzNum * buzzFlg ) {
        console.log("Fizz " + fizzNum * fizzFlg);
        fizzFlg++;
      }else if ( fizzNum * fizzFlg > buzzNum * buzzFlg ) {
        console.log("Buzz " + buzzNum * buzzFlg);
        buzzFlg++;
      }else {
        console.log("エラーが発生しました。");
      };
    };
  });
  // ■■■ クリックイベント end ■■■
}
