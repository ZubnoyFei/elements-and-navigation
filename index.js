 //console.log(document.body);
//console.log(document.documentElement);
//console.log(document.body.childNodes);

 // console.log(document.body.firstChild); // Получение первого дочернего элемента
 // console.log(document.body.lastChild); // Получение последнего дочернего элемента
 //

 //console.log(document.querySelector('#current').parentNode)// В консоль выводится родительский элемент first
 // console.log(document.querySelector('#current').parentNode.parentNode);// в консоль выводится высший родительский элемент wrapper
 // console.log(document.querySelector('[data-current="3"]').nextElementSibling);

 //console.log(document.querySelector('#current').parentElement);// В консоли получаем элемент first

 for (let node of document.body.childNodes) { //Перебираем элементы в массивы с помощью команды for all, чтобы иметь возможность останавливать цикл или полностью его прерывать
     if(node.nodeName == '#text') {
         continue;
     }
  console.log(node);
 }