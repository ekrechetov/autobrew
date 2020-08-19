const fs = require("fs");
 
fs.writeFileSync("/sys/class/gpio/export", "16", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("/sys/class/gpio/export", "utf8");
    console.log(data);  // выводим считанные данные
});
 
fs.writeFileSync("/sys/class/gpio/gpio16/direction", "out", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("/sys/class/gpio/gpio16/direction", "utf8");
    console.log(data);  // выводим считанные данные
});
 
fs.writeFileSync("/sys/class/gpio/gpio16/value", "1", function(error){
 
    if(error) throw error; // если возникла ошибка
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("/sys/class/gpio/gpio16/value", "utf8");
    console.log(data);  // выводим считанные данные
});