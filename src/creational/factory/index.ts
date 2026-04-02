// Інтерфейс продукту, який визначає операції, що повинні виконувати всі конкретні продукти.
interface Product {
    operation(): string;
}

// Конкретний Продукт 1
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Результат ConcreteProduct1}';
    }
}

// Конкретний Продукт 2
class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Результат ConcreteProduct2}';
    }
}

// Базовий клас Творця (Creator), який оголошує фабричний метод.
abstract class Creator {
    // Фабричний метод
    public abstract factoryMethod(): Product;

    // Основна бізнес-логіка творця, яка покладається на об'єкти Продуктів.
    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: Працюю з ${product.operation()}`;
    }
}

// Конкретний Творець 1 перевизначає фабричний метод для створення ConcreteProduct1.
class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

// Конкретний Творець 2 перевизначає фабричний метод для створення ConcreteProduct2.
class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

export { Creator, ConcreteCreator1, ConcreteCreator2 };