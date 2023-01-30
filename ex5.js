// родительский класс
class Appliances {
    constructor(year) {
        this.year = year
        this.company = "Samsung"
    }
    getModel() {
        console.log(`The model of this ${this.type} is ${this.model}`)
    }
    calculateAllElUsage(devices) {
        let allElUsage = 0
        devices.forEach(element => {
            if (element.isOn = true) {
                allElUsage += element.elUsageInOneHour
            }
            return allElUsage
        });
        console.log(`All your devices use ${allElUsage} watts in one hour`)
    }
}

// классы потомки
class KitchenAppliances extends Appliances {
    constructor(type, model, year, isOn, elUsageInOneHour) {
        super(year);
        this.type = type
        this.model = model
        this.isOn = isOn
        this.elUsageInOneHour = elUsageInOneHour
    }
}

class Phone extends Appliances {
    constructor(type, model, year, isOn, elUsageInOneHour) {
        super(year);
        this.type = type
        this.model = model
        this.isOn = isOn
        this.elUsageInOneHour = elUsageInOneHour
    }
}

class Computer extends Appliances {
    constructor(type, model, year, isOn, elUsageInOneHour) {
        super(year);
        this.type = type
        this.model = model
        this.isOn = isOn
        this.elUsageInOneHour = elUsageInOneHour
    }
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