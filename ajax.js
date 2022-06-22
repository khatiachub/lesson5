//ajax
let usersInfo=document.getElementById('usersinfo');

function ajax(){
    let requist = new XMLHttpRequest();
    requist.open('GET','https://jsonplaceholder.typicode.com/users');
    requist.addEventListener('load', function() {
        let data = JSON.parse(requist.responseText);
        data.forEach(element => {
            createPost(element);
        });
        
    });
    requist.send();
}
function createPost(item){
    let name=document.createElement('li');
    name.innerText=item.name;
    name.classList.add('usersname');

    let username=document.createElement('li');
    username.innerText='Username: '+item.username;
    username.classList.add('user');

    let email=document.createElement('li');
    email.innerText='Email: '+item.email;
    email.classList.add('user');
     

    let address=document.createElement('li');
    address.innerText='Address:'+item.address.street;
    address.classList.add('user');

    let suite=document.createElement('li');
    suite.innerText='Suite: '+item.address.suite;
    suite.classList.add('user');

    let city=document.createElement('li');
    city.innerText='City: '+item.address.city;
    city.classList.add('user');

    let phone=document.createElement('li');
    phone.innerText='Phone: '+item.phone;
    phone.classList.add('user');

    let website=document.createElement('li');
    website.innerText='Website: '+item.website;
    website.classList.add('user');

    let users=document.createElement('ul');
    users.classList.add('usersinfoul');
    let usersCont=document.createElement('div');
    usersCont.classList.add('usersinfodiv');
    usersCont.appendChild(users);
    usersInfo.appendChild(usersCont);
    
    usersCont.addEventListener('click', function(){
        this.classList.toggle('d-activee');
        this.classList.toggle('usersactive')
    })
    
    users.appendChild(name);
    users.appendChild(username);
    users.appendChild(email);
    users.appendChild(address);
    users.appendChild(suite);
    users.appendChild(city);
    users.appendChild(phone);
    users.appendChild(website);
}

ajax();
