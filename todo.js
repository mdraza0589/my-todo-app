let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')
let dateBox = document.getElementById('date-box')
function addtast(){
    if(inputBox.value == ''){
        alert('white here')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = `${inputBox.value}  - ${dateBox.value}`;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = ''
    saveData();
}

function clearAll(){
    let confirmToCancel = confirm('are you confirm to clear');
    if(confirmToCancel){
        listContainer.innerHTML = ''
        saveData();
    }
    else{
        return;
    }
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()






// let inputBox = document.getElementById('input-box');
// let listContainer = document.getElementById('list-container');
// // let clearButton = document.getElementById('clear-all'); // New clear button

// function addTask() {
//     if (inputBox.value == '') {
//         alert('Please write a task!');
//     } else {
//         // Check for duplicate tasks
//         let tasks = Array.from(listContainer.children).map(task => task.textContent.replace('X', '').trim());
//         if (tasks.includes(inputBox.value.trim())) {
//             alert('This task already exists!');
//         } else {
//             let li = document.createElement('li');
//             li.innerHTML = inputBox.value;
//             listContainer.appendChild(li);

//             let span = document.createElement('span');
//             span.innerHTML = 'X';
//             li.appendChild(span);
//             saveData();
//         }
//     }
//     inputBox.value = '';
// }

// listContainer.addEventListener('click', function (e) {
//     if (e.target.tagName === 'LI') {
//         e.target.classList.toggle('checked');
//         saveData();
//     } else if (e.target.tagName === 'SPAN') {
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// // Clear all tasks
// // clearButton.addEventListener('click', function () {
// //     if (confirm('Are you sure you want to clear all tasks?')) {
// //         listContainer.innerHTML = '';
// //         saveData();
// //     }
// // });

// function saveData() {
//     localStorage.setItem('data', listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem('data') || '';
// }

// showTask();
