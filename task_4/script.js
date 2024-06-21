document.addEventListener('DOMContentLoaded', () => {
    const usersList = document.getElementById('users-list');
    const userDetails = document.getElementById('user-details');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.className = 'user__item';
                listItem.textContent = user.name;
                listItem.addEventListener('click', () => showUserDetails(user));
                usersList.appendChild(listItem);
            });
        });

    function showUserDetails(user) {
        userDetails.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Телефон: ${user.phone}</p>
            <p>Вебсайт: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
        userDetails.classList.remove('hidden');
    }
});
