//連結HTML檔案
function doGet() {
    var html= HtmlService.creatTemplateFromfile("form");
    var checj=html.evaluate();
    var show=check.setXFrameOptionsMode(HtmlService.setXFrameOptionsMode.ALLOWALL);
    return show;
   }
   //新增到試算表
   function addData(rowData){
     //抓時間
     var currentDate=new Date();
     //取得目前的試算表檔案
     var ss=SpreadsheetApp.getActiveSpreadshet();
     //請輸入您的試算表名稱在這裡
     var ws=ss.getSheetByName("");
   //插入資料
     ws.appendRow([currentDate,rowData.name,rowData.email,rowData.comment])
   }