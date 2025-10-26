function filterByProperty<T, K extends keyof T>(array: T[], key: K, value: T[K]): T[] {
  return array.filter(item => item[key] === value);
}

/*T puo assume il valore che passi (product o admin) K puo essere solo una key d T */

interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

const users: User[] = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'admin' },
  { id: 4, name: 'Diana', role: 'user' },
];

const admins = filterByProperty(users, 'role', 'admin');

console.log("Utenti con ruolo 'admin':", admins);
