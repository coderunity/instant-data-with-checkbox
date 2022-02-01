

const skills = document.querySelectorAll('.skill');
const all_list = document.querySelector('.lists');

skills.forEach(skill =>{

    skill.addEventListener('change', function(){

        let all_data = document.querySelectorAll('.skill:checked');

        let all_skillarr = [];
        all_data.forEach(data =>{

            all_skillarr.push(data.value);


        });

        let list = '';

        all_skillarr.map(data => {
            list += `<li class="list-group-item">${data}</li>`;
        });


        all_list.innerHTML = list;


    });



});


































// skills.forEach(skill => {

//     skill.addEventListener('change', function(){


//         let all_data = document.querySelectorAll('.skill:checked');

//         let skills_arr = [];

//         all_data.forEach(data =>{
//             skills_arr.push(data.value);
//         });
        

//         let list = '';

//         skills_arr.map( data =>{

//             list += `<li class="list-group-item">${data}</li>`;

//         });

//         all_list.innerHTML = list;

//     });

// });


