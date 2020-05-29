let Agenda = localStorage.Agenda ? JSON.parse(localStorage.Agenda) : 
             [{'Hour':'9AM', 'Schedule':''},
              {'Hour':'10AM', 'Schedule':''},
              {'Hour':'11AM', 'Schedule':''},
              {'Hour':'12AM', 'Schedule':''},
              {'Hour':'1PM', 'Schedule':''},
              {'Hour':'2PM', 'Schedule':''},
              {'Hour':'3PM', 'Schedule':''},
              {'Hour':'4PM', 'Schedule':''},
              {'Hour':'5PM', 'Schedule':''}];
const agendaEl = document.querySelector("#Agenda");

    function renderList(){
        agendaEl.innerHTML = '';

        Agenda.forEach( 
            function( item, index ){
                agendaEl.innerHTML += `<div class="row" >
                <div class="hour" id="${Agenda[index].Hour}" style="width: 10%;">
                    ${item.Hour}
                </div>
                <textarea id="${index}" class="${getTime(item)}" style="width: 80%;">
                    ${item.Schedule}      
                </textarea> 
                <img src="https://lh3.googleusercontent.com/proxy/zJa0pbvzOyZSbroVUgZer7ZWBkqHoMB79VzTVxajhr9nPQWjACWvJlm838dBZa6uYT9A385nBaFscCqfBJp0dqRuA35KPcN6X0Y7uUsP5sUuwNVSWMXKyv-KNNJMrdQTjgP0rw" alt="save button" class="saveBtn" style="width: 10%;" onClick='saveAgenda(event)'/>
              </div>`;
            }
        )
    }
    renderList();

    function getTime(item){
        let currentTime = moment().format('kk');    // get current hour
        console.log(currentTime);
        let scheduleTime = Number(item.Hour.slice(0,-2));// Numeric time on agenda
        let scheduleTimeAMPM = item.Hour.substr(-2);// AM/PM of time on agenda
        let convertedTime;
        if(scheduleTimeAMPM == "AM"){
            convertedTime = scheduleTime;
        }else{
            convertedTime = scheduleTime+12;
        }

        if(convertedTime<currentTime) return 'past';
        else if(convertedTime==currentTime) return 'present';
        else if(convertedTime>currentTime) return 'future';
    }

    function saveAgenda(event){
        event.preventDefault();
        let textArea = event.target.parentElement.childNodes[3];
        let idx = textArea.id;

        Agenda[idx].Schedule = textArea.value;
        // console.log(textArea.value); document.querySelectorAll('textarea')[0].value
        // save to local storage
        localStorage.Agenda = JSON.stringify(Agenda);

        renderList();
    }