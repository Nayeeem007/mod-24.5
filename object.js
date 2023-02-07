const student = {
    name : 'Nayeem',
    id : 2002265,
    address : 'Basherhaat',
    isSingle : true,
    friends: ['Sakib', 'Momen', 'Miraj', 'Tofael'],
    movies : [{name : 'Dhamal', year : 2015},{name : 'Phir Hera Pheri', year : 2018}],
    act: function (){
        console.log('acting like Shakib Khan');
    },
    car: {
        brand : 'Tesla',
        price : 50000000,
        made : 2025,
        manifacturer : {
            name : 'Tesla',
            CEO : 'Elon Mask',
            address : 'USA'
        }
    }
}

// console.log(student.car);
console.log(student.act);
//  student.act()