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
                agendaEl.innerHTML += `<div class="row  time-block" >
                <div class="hour" id="${Agenda[index].Hour}">
                    ${item.Hour}
                </div>
                <textarea id="${index}" class="${getTime(item)}  description"  onfocus="this.select()">${item.Schedule}</textarea> 
                <div class="saveBtn">
                    <i class="far fa-save" onClick='saveAgenda(event)'></i>
                </div>
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
        // save input to Agenda
        Agenda[idx].Schedule = textArea.value;
        // save to local storage
        localStorage.Agenda = JSON.stringify(Agenda);

        renderList();
    }

