document.getElementById('saveImage').addEventListener('click', function() {
    const referenceNumber = document.getElementById('referenceNumber').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const transactionDate1 = document.getElementById('transactionDate1').value || "-";
    const recipientName = document.getElementById('recipientName').value || "-";
    const amount = document.getElementById('amount').value || "-";
    const notes = document.getElementById('notes').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/document/blob/main/am.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">JING HUAD CORPORATION COMPANY LIMITED</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">ที่ตั้งบริษัท: 33/3 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10</p>


                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12659/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 215px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง ยืนยันฐานข้อมูลธุรกรรม</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ตามที่สมาชิกได้ทำการ${notes} ในการดำเนินการนี้ สมาชิกได้รับอนุมัติให้ขยายเวลาในการทำรายการเพิ่มเติม เพื่อให้สมาชิกสามารถดำเนินการได้อย่างครบถ้วนสมบูรณ์</p>     

                <p style="position: absolute; top: 350; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                รายละเอียดการขยายเวลา: <br>
                -ชื่อผู้ใช้งาน : ${referenceNumber}<br>
                -ชื่อ-นามสกุล : ${accountNumber}<br>
                -ยอดเงินที่ต้องดำเนินการ${notes} : ${amount} บาท <br>
                -กำหนดเวลาใหม่ : ${transactionDate1} ก่อนเวลา ${recipientName} น.
                </p>     


                <p style="position: absolute; top: 490; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: กรุณาดำเนินการ${notes}ให้เสร็จสิ้นภายในกำหนดเวลาใหม่ หากมีข้อสงสัยหรือต้องการ
ความช่วยเหลือเพิ่มเติม กรุณาติดต่อเจ้าหน้าที่ทันที
                </p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 405px; color:#656565; font-size: 20px; font-weight: bold;">(นายวัฒน สุนทรมั่นคงศรี)</p>                 
                <p style="position: absolute; top: 835px; left: 360px; color:#656565; font-size: 20px; font-weight: bold;">ผู้จัดการ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>                 
                <p style="position: absolute; top: 860px; left: 387px; color:#656565; font-size: 20px; font-weight: bold;"> ออก ณ วันที่ ${transactionDate}</p>                 

              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
