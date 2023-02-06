// var fullName = 'Tran Ngoc Tien';


// // comment
// //built in function
 
// // console - DUNG DE IN THONG BAO O TAB CONSOLE
// console.log(fullName); // 
// console.error(fullName); // hiện lỗi 

// //alert
// alert(fullName);

// //confirm
// confirm('Xac nhan ban du tuoi'); //hiện thông báo confirm 

// //prompt
// prompt('Xác nhận bạn đủ tuổi'); //  giống hàm confirm nhưng có thêm một ô nhập

// //timeout - thông báo chỉ hiện một lần duy nhất 
// setTimeout(function() {
//     alert('Thong bao')
// }, 1000);


// //interval - Thông báo sẽ hiển thị định kỳ theo giây 
// setInterval(function() {
//     console.log(' Day la thong bao thu ' + Math.random())
// }, 1000);


// // //-----------------CÁCH SỬ DỤNG TOÁN TỬ --------------
// // var a = 5;
// // a -= 2; // a = a - 2
// // console.log(a);

// TIỀN TỐ VÀ HẠU TỐ
// HẬU TỐ
// var a = 1;

// a++;
// console.log(a);// đến đây thì a = 2

// a++;
// console.log(a);// đến đây thì a = 3

// var b = 1;

// console.log(b++); //đến đây b bằng 2 nhưng khi in ra nó vãn trả giá trị b = 1 

// // TIỀN TỐ
// var c = 1;

// ++c; // Dùng tiền tố thay cho hậu tố ở ví dụ trên 
// console.log(c); // =2; Tương tự như ở hậu tố 

// var d = 1;

// console.log(++d); // 2 // khác với hậu tố , khi in phần tử có tiền tố thì nó in giá trị sau khi tăng luôn 
// console.log(d); //2 


//=> TOÁN TỬ ++ HOẶC -- KHI ĐƯỢC DÙNG LÀM TIỀN TỐ THÌ SẼ THỰC HIỆN PHÉP TOÁN TRƯỚC RỒI MỚI TRẢ GIÁ TRỊ
//=> TOÁN TỬ ++ HOẶC -- KHI ĐƯỢC DÙNG LÀM HẬU TỐ THÌ SẼ TRẢ GÁI TRỊ TRƯỚC RỒI MỚI THỰC HIỆN PHÉP TOÁN

//VÍ DỤ:
// var a =1; 
// var b = ++a * a--
// console.log(b) 

//SAU KHI DÙNG TIỀN TỐ THÌ GIÁ TRỊ CỦA a LÀ 2, VỚI HẬU TỐ ĐẰNG SAU THÌ VẪN SẼ SỬ DỤNG a = 2 VÌ SỬ DỤNG HẬU TỐ
// VẬY CONSOLE SẼ RA KẾT QUẢ LÀ 4

//--------------------TOAN TU CHUOI ----------------------\\

// var firstName = 'Tien'
// var lastName = 'Tran'

// console.log('Tran' + ' ' + 'Tien');

//TOÁN TỬ + SẼ LÀ TOÁN TỬ SỐ HỌC NẾU CẢ 2 VẾ CỦA NÓ ĐỀU LÀ SỐ, NẾU KHÔNG PHẢI THÌ SẼ TRỞ THÀNH TOÁN TỬ CHUỖI 

//=> OUTPUT: TienTran

//CACH KHAC:
 
// var name = 'Tu';
// name += ' Do' // name = name + 'Do';

// console.log(name)

//-----------------TOAN TU SO SANH----------------------\\

// var a = 1;
// var b = 2;

// //HÀM IF THƯỜNG DÙNG Ở TOÁN TỬ SO SÁNH 
// if (a != b){
//     console.log('Dieu kien dung')
// } else { 
//     console.log('Dieu kien sai')
// }

/** NHỮNG TOÁN TỬ SO SÁNH MỚI 
 * 1, ===: SO SÁNH BẰNG TUYỆT ĐỐI '
 * 2, !== SO SÁNH KHÁC TUYỆT ĐỐI
 */

// var a = 1 ;
// var b = '1';

// console.log(a == b); //true 
// console.log(a === b); // false

// === so sánh sát về mặt giá trị trong khi == chỉ so sánh về mặt tương đói

//Toán tử logic và câu điều kiện if

//------------KIEU DU LIEU BOOLEAN--------------------\\

//  var isSuccess = true; //false

//  console.log(isSuccess);

 //---------TOAN TU LOGIC------------------\\

 /** TOÁN TỬ LOGIC BAO GỒM:
  * 1, &&: AND TẤT CẢ ĐỀU ĐÚNG MỚI ĐÚNG 
  * 2, ||: OR: MỘT TRONG SỐ PHAANMF TỬ ĐÚNG LÀ ĐÚNG 
  * 3, NOT: NGHỊCH DẢO
  */

//  var a = 1;
//  var b = 2;

//  if ( a = 1 && b > 1) {
//     console.log('Đúng')
//  } else {
//     console.log('Sai')
//  }

 //----------KIỂU DỮ LIỆU----------\\

 /**KIỂU DỮ LIỆU TRONG JS:
  * 1, DỮ LIỆU DẠNG NGUYÊN THỦY:
  * Number
  * String
  * Boolean
  * Undefined
  * Null
  * Symbol
  
  * 2, DỮ LIỆU DẠNG PHỨC TẠP
  * Function
  * Object
  */

 // Number: 
//  var a = 1;

//  // String
//  var fullName = 'Telles Tran';

//  // Boolean
//  var isSuccess = true;

// // Undefined
// var age; // không xác định

// // Null 
// var isNull = null; // không có gì

// // Symbol 
// var id = Symbol('id');

// console.log(id) 

// //Function
// var myFunction = function() {
//     console.log('Xin chào các bạn');
// }

// myFunction();

// //Object

// var myObject = {
//     name: 'Tien',
//     age: 18,
//     address: 'Hanoi'
// }

// var myArray = [
//     'JS',
//     'HTML',
//     'CSS'
// ];


// // Check kiểu dữ liệu
// console.log(typeof a);

//----------------TRUTHY VÀ FALSY---------------

/** Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy */

// console.log(Boolean(1)) // true
// console.log(Boolean(['BMW'])) // true
// console.log(Boolean({ name: 'Miu' })) // true

// console.log(!!'hi') // true, HAI ! K THAY ĐỔI

// /** Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.

// Trong Javascript có 6 giá trị sau được coi là Falsy:

// false
// 0 (số không)
// '' or "" (chuỗi rỗng)
// null
// undefined
// NaN */

// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false

// /** document.all chuyển sang boolean sẽ là false
// document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
// Khi typeof document.all sẽ trả về "undefined" */

// console.log(document.all)