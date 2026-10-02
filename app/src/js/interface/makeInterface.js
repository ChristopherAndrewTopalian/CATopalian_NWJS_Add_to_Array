
function makeInterface()
{
    let theTitle = ce('a');
    theTitle.id = 'theTitle';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_NWJS_Add_to_Array';
    theTitle.target = '_blank';
    theTitle.textContent = 'CATopalian NWJS Add to Array';
    theTitle.style.fontSize = '15px';
    theTitle.style.fontWeight = 'bold';
    theTitle.style.fontFamily = 'Arial';
    theTitle.style.textDecoration = 'none';
    theTitle.style.color = 'rgb(170, 170, 170)';
    ba(theTitle);

    ba(ce('hr'));

    let name_input = ce('input')
    name_input.id = 'name_input';
    name_input.type = 'text';
    name_input.placeholder = 'Enter Name';
    name_input.onkeydown = function(event)
    {
        if (event.key === 'Enter')
        {
            event.preventDefault(); // Stops the annoying 'ding' sound in some apps
            enter_btn.click();  // Triggers the Enter button
        }
    };
    ba(name_input);

    ba(ce('hr'));

    let enter_btn = ce('button');
    enter_btn.textContent = 'Enter'
    enter_btn.onclick = function()
    {
        people.push(name_input.value);

        ge('output_txt').value = JSON.stringify(people, null, 2);

        name_input.value = '';

        name_input.focus();
    };
    ba(enter_btn);

    ba(ce('hr'));

    let output_txt = ce('textarea');
    output_txt.id = 'output_txt';
    output_txt.style.width = '400px';
    output_txt.style.height = '200px';
    ba(output_txt);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

