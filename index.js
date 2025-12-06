const a = [
    {
        day: "ПН",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401",
            obed: "12:05 - 12:55                                         12:05-12:55",
        },
        {   
            
            ayd: "401",
            time: "8:00",
            name: "front",
        }]
    },
    {
        day: "ВТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401",
        },
        {  
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "СР",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "ЧТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "ПТ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    },
    {
        day: "СБ",
        data: [{
            time: "8:00",
            name: "front",
            ayd: "401"
        },
        {
            time: "8:00",
            name: "front",
            ayd: "401"
        }]
    }

];const b = document.querySelectorAll(".qwerty");
b.forEach(r => {

    a.forEach(i => {

        if (r.querySelector(".day").textContent == i.day) {
            if (r.querySelector(".day").textContent == "ПН") {
                i.data.forEach(p => {
                    r.innerHTML += `
            <div class="box1">
                <div class="time">${p.time}</div>
                <div class="pred">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
            <div class="obed">${p.obed} .</div>
    `
                });
            } else {
                i.data.forEach(p => {
                    r.innerHTML += `
            <div class="box1">
                <div class="pricol">${p.name}</div>
            </div>
            <div class="kb">${p.ayd} кб.</div>
    `
                });
            }    
        }
    })
});