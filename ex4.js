// функция конструктор для всех устройств
function Appliances(year) {
    this.company = 'Samsung'
    this.year = year
}

// функция констуктор для кухонных приборов
function KitchenAppliances(type, model, year, isOn, elUsageInOneHour) {
    this.type = type
    this.model = model
    this.year = year
    this.isOn = isOn
    this.elUsageInOneHour = elUsageInOneHour
}

// функция конструктор для телефонов
function Phone(type, model, year, isOn, elUsageInOneHour) {
    this.type = type
    this.model = model
    this.year = year
    this.isOn = isOn
    this.elUsageInOneHour = elUsageInOneHour
}

// функция конструктор для компьютеров
function Computer(type, model, year, isOn, elUsageInOneHour) {
    this.type = type
    this.model = model
    this.year = year
    this.isOn = isOn
    this.elUsageInOneHour = elUsageInOneHour
}

// Делигирующая связь 
KitchenAppliances.prototype = new Appliances()
Phone.prototype = new Appliances()
Computer.prototype = new Appliances()

// методы родительской функции
Appliances.prototype.getModel = function() {
    console.log(`The model of this ${this.type} is ${this.model}`)
}

Appliances.prototype.calculateAllElUsage = function(devices) {
    let allElUsage = 0
    devices.forEach(element => {
        if (element.isOn = true) {
            allElUsage += element.elUsageInOneHour
        }
        return allElUsage
    });
    console.log(`All your devices use ${allElUsage} watts in one hour`)
}

// создание устройств
const fridge = new KitchenAppliances('Refrigerator', 'RB5000A', 2022, true, 250)
const smartphone = new Phone('Fliphone', 'Galaxy Z Flip4', 2022, true, 33)
const laptop = new Computer('Laptop', 'Galaxy Book2 Pro', 2022, true, 150)

// собтсвенные свойства 
fridge.material = 'Metal'
smartphone.color = 'Lilac'
laptop.ram = '16 GB'

// собтсвенные методы
smartphone.callMom = function() {
    console.log(`Calling 'Mom'...`)
}
fridge.defrost = function() {
    console.log(`The refrigerator ${this.model} will take 5 hours to deforst. Please wait.`)
}
laptop.calculateAvialableSpace = function(spaceBefore, fileSize) {
    console.log(`There is ${spaceBefore - fileSize} GB avialable on this ${this.type}`)
}

// проверка собственных методов 
smartphone.callMom()
fridge.defrost()
laptop.calculateAvialableSpace(250, 16)

// метод для проверки потребления электроэнергии
const yourDevices = [smartphone, fridge, laptop]

smartphone.calculateAllElUsage(yourDevices)