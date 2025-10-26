function filterByProperty(array, key, value) {
    return array.filter(function (item) { return item[key] === value; });
}
var users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'admin' },
    { id: 4, name: 'Diana', role: 'user' },
];
var admins = filterByProperty(users, 'role', 'admin');
console.log("Utenti con ruolo 'admin':", admins);
