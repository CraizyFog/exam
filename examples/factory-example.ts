import { Creator, ConcreteCreator1, ConcreteCreator2 } from '../src/creational/factory';

function clientCode(creator: Creator) {
    console.log('Клієнт: Я не знаю клас творця, але це працює.');
    console.log(creator.someOperation());
}

console.log('Запуск з ConcreteCreator1:');
clientCode(new ConcreteCreator1());

console.log('\n');

console.log('Запуск з ConcreteCreator2:');
clientCode(new ConcreteCreator2());