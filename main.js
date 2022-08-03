const student = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 19,
        isMarried: false,
        scores: 120
    },
    {
        name: "Lohn",
        age: 20,
        isMarried: false,
        scores: 100
    },
];

// // Выдает все имена из массива объектов (метод Map под капотом)
const getNames = (arr)=> {
    const names = []
    for (i =0; i< arr.length; i++){
        const value = arr[i].name
        names[i]=value
    }
    return names;
}


// //Добавление Student в массив объектов
const getStudent= (arr)=>{
    const student = [];
    for(i=0;i<arr.length; i++){
        const value = {...arr[i], isStudent: true}
        student[i]= value
    }
    return student
}

console.log(student.map((e)=> {return e.name})) // - он самый метод Map

// функция- фильтр (самописный)

let getFilteredArray = (array, func) => {
    const newArray = []
    for (i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(getFilteredArray(student, s => s.age >= 20))


// метод filter
console.log(student.filter(s => s.age >= 20))


const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}
console.log(myFind(student,f=> f.age >= 20))


