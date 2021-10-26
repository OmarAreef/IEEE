const select = document.querySelector('#selectE');

console.log(select.value)
const tech = ['Cyber Security', 'Operating System', 'Data Analysis'];
const nonTech = ['Mental well being', 'CV writting', 'Interview tips'];

select.addEventListener("click", () => {
    console.log(select.value)
    const div = document.querySelector('#newSelect')
    console.dir(div.children[0])
    if (div.children.length === 0) {
        const label = document.createElement('label');
        label.innerHTML = 'Select Name of Event'
        label.setAttribute('for' , 'newSelect')
        label.classList.add('form-label' , 'pb-2')
        div.append(label);
        const newS = document.createElement('select')
        newS.classList.add('form-select-lg', 'mb-3', 'py-2', 'px-1', 'd-block');
        newS.setAttribute('id' , 'newSelect')
        div.append(newS);
    }
    const newS = div.children[1];
    newS.required = true;
    newS.innerHTML = ""
    if (select.value === '2') {
        console.log('nonTech')
        for (let non of nonTech) {
            const option = document.createElement('option');
            option.innerHTML = non;
            option.setAttribute('value', non);
            newS.append(option);
        }
    }
    else {
        console.log('techtechnical')
        for (let non of tech) {
            const option = document.createElement('option');
            option.innerHTML = non;
            option.setAttribute('value', non);
            newS.append(option);
        }
    }
})

