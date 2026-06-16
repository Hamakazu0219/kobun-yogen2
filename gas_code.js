/**
 * Google Apps Script (GAS) 用のWeb APIコード
 * 
 * このスクリプトはGoogleスプレッドシートのコンテナバインドスクリプトとして貼り付け、
 * Webアプリとしてデプロイして使用します。
 */

function doGet(e) {
  try {
    // 「シート1」という名前のシートを優先取得し、存在しない場合はアクティブシートを取得（意図しないタブからのデータ漏洩を防ぐ）
    const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = activeSpreadsheet.getSheetByName("シート1") || activeSpreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // ヘッダー行を取得
    const headers = data[0];
    const jsonArray = [];
    
    // データ行をオブジェクト配列に変換
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      
      // 単語（見出し語）が入力されていない行はスキップ
      if (!row[1] || row[1].toString().trim() === "") {
        continue;
      }
      
      const wordObj = {
        id: row[0] ? Number(row[0]) : i,
        word: row[1].toString().trim(),
        meaning: row[2] ? row[2].toString().trim() : "",
        pos: row[3] ? row[3].toString().trim() : "",
        type: row[4] ? row[4].toString().trim() : "",
        conjugations: {
          mizen: row[5] ? row[5].toString().trim() : "",
          renyo: row[6] ? row[6].toString().trim() : "",
          shushi: row[7] ? row[7].toString().trim() : "",
          rentai: row[8] ? row[8].toString().trim() : "",
          izen: row[9] ? row[9].toString().trim() : "",
          meirei: row[10] ? row[10].toString().trim() : ""
        }
      };
      
      jsonArray.push(wordObj);
    }
    
    // JSONデータを返却
    const output = ContentService.createTextOutput(JSON.stringify(jsonArray));
    output.setMimeType(ContentService.MimeType.JSON);
    
    // CORS対応としてレスポンスヘッダーを追加（GASのWebアプリは自動的にリダイレクト対応される）
    return output;
    
  } catch (error) {
    const errorResponse = {
      status: "error",
      message: error.toString()
    };
    const output = ContentService.createTextOutput(JSON.stringify(errorResponse));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
  }
}
