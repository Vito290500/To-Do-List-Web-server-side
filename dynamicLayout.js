const HomeBtn = document.getElementById('HomeBtn');
const CalendarBtn = document.getElementById('CalendarBtn');
const NoteBtn = document.getElementById('NoteBtn');
const InfoBtn = document.getElementById('InfoBtn');
const ChangeColorBtn = document.getElementById('Light');
const input = document.getElementById('AddingTask');

const MainSection = document.getElementById('main-content');
const HomeSection = document.getElementById('Home');
const CalendarSection = document.getElementById('Calendar');
const NoteSection = document.getElementById('Note');
const InfoSection = document.getElementById('Info');

ChangeColorBtn.addEventListener('click', () =>{
    if (ChangeColorBtn.value === 'light'){
        const img =  ChangeColorBtn.querySelector('img');
        const p = ChangeColorBtn.querySelector('p'); 
        const inputField = input.querySelector('input');

        document.documentElement.style.setProperty('--deep-bg-color', 'rgb(253, 66, 253)');
        document.documentElement.style.setProperty('--second-bg-color', 'rgb(170, 25, 170)');
        document.documentElement.style.setProperty('--third-bg-color', 'rgba(255, 223, 126, 0.5)');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--light-bg-color', 'rgb(49, 49, 49)');
        document.documentElement.style.setProperty('--fourth-bg-color', 'white');
        document.documentElement.style.setProperty('--table-text-color', 'black');


        ChangeColorBtn.value = 'black';
        img.src = 'immagini/dark.png';
        p.textContent = 'DARK MODE';
        inputField.style.color = "black";
        

    }else{
        const img =  ChangeColorBtn.querySelector('img');
        const p = ChangeColorBtn.querySelector('p'); 
        const inputField = input.querySelector('input');

        document.documentElement.style.setProperty('--deep-bg-color', 'rgb(50, 5, 92)');
        document.documentElement.style.setProperty('--second-bg-color', 'rgb(23, 5, 40)');
        document.documentElement.style.setProperty('--third-bg-color', 'rgb(49, 49, 49)');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--light-bg-color', 'rgb(132, 132, 132)');
        document.documentElement.style.setProperty('--fourth-bg-color', 'rgb(81, 81, 81)');
        document.documentElement.style.setProperty('--table-text-color', 'white');

        ChangeColorBtn.value = 'light';
        img.src = 'immagini/sun.png';
        p.textContent = 'LIGHT MODE';
        inputField.style.color = "white";
    }
});

HomeBtn.addEventListener('click', () =>{   
    HomeSection.style.display = 'block';
    CalendarSection.style.display = 'none';
    NoteSection.style.display = 'none';
    InfoSection.style.display = 'none';
})
CalendarBtn.addEventListener('click', () =>{  
    HomeSection.style.display = 'none';
    CalendarSection.style.display = 'block';
    NoteSection.style.display = 'none';
    InfoSection.style.display = 'none';
})
NoteBtn.addEventListener('click', () =>{ 
    HomeSection.style.display = 'none';
    CalendarSection.style.display = 'none';
    NoteSection.style.display = 'block';
    InfoSection.style.display = 'none';
})
InfoBtn.addEventListener('click', () =>{ 
    HomeSection.style.display = 'none';
    CalendarSection.style.display = 'none';
    NoteSection.style.display = 'none';
    InfoSection.style.display = 'block';
})


