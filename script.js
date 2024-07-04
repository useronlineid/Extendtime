document.getElementById('saveImage').addEventListener('click', function() {
    const User = document.getElementById('User').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const transactionDate1 = document.getElementById('transactionDate1').value || "-";
    const time = document.getElementById('time').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const Memo = document.getElementById('Memo').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/Extendtime/blob/main/am.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyNameDisplay">${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyNameEngDisplay">${document.getElementById('companyNameEng').innerText}</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyAddressDisplay">${document.getElementById('companyAddress').innerText}</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12659/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 215px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง ยืนยันฐานข้อมูลธุรกรรม</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ตามที่สมาชิกได้ทำการ${Memo} ในการดำเนินการนี้ สมาชิกได้รับอนุมัติให้ขยายเวลาในการทำรายการเพิ่มเติม เพื่อให้สมาชิกสามารถดำเนินการได้อย่างครบถ้วนสมบูรณ์</p>     

                <p style="position: absolute; top: 350; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                รายละเอียดการขยายเวลา: <br>
                -ผู้ใช้งาน : ${User}<br>
                -ชื่อ-นามสกุล : ${accountNumber}<br>
                -ยอดเงินที่ต้องดำเนินการ${Memo} : ${amount} บาท <br>
                -กำหนดเวลาใหม่ : ${transactionDate1} ก่อนเวลา ${time} น.
                </p>     


                <p style="position: absolute; top: 490; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: กรุณาดำเนินการ${Memo}ให้เสร็จสิ้นภายในกำหนดเวลาใหม่ หากมีข้อสงสัยหรือต้องการ
ความช่วยเหลือเพิ่มเติม กรุณาติดต่อเจ้าหน้าที่ทันที
                </p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyName1Display">(${document.getElementById('companyName1').innerText})</p>
                <p style="position: absolute; top: 835px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 40%;" id="companyNameDisplay">ผู้จัดการ ${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 860px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ออก ณ วันที่ ${transactionDate}</p>   
              </div>
        </body>
        </html>
    `);
});

document.getElementById('editCompanyInfo').addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'block';
});

document.getElementById('saveCompanyInfo').addEventListener('click', function() {
    const newCompanyName = document.getElementById('newCompanyName').value;
    const newCompanyNameEng = document.getElementById('newCompanyNameEng').value;
    const newCompanyAddress = document.getElementById('newCompanyAddress').value;
    const newCompanyName1 = document.getElementById('newCompanyName1').value;

    if (newCompanyName) {
        document.getElementById('companyName').innerText = newCompanyName;
    }
    if (newCompanyNameEng) {
        document.getElementById('companyNameEng').innerText = newCompanyNameEng;
    }
    if (newCompanyAddress) {
        document.getElementById('companyAddress').innerText = newCompanyAddress;
    }
    if (newCompanyName1) {
        document.getElementById('companyName1').innerText = newCompanyName1;
    }
    document.getElementById('editCompanyModal').style.display = 'none';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'none';
});
