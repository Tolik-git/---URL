const url = 'https://purpleschool.ru/course/javascript';
const [protocol, _, host, ...path] = url.split('/');
console.log(protocol, _, host, ...path);






