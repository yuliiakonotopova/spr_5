class Product {
 constructor(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
 }

 getInfo() {
  return (
   `${this.name} - ${this.category} - $${this.price}` +
   (this.brand ? ` - Brand: ${this.brand}` : "") +
   (this.processor ? ` - Processor: ${this.processor}` : "") +
   (this.ram ? ` - RAM: ${this.ram}` : "") +
   (this.brewingMethod ? ` - Brewing Method: ${this.brewingMethod}` : "") +
   (this.capacity ? ` - Capacity: ${this.capacity}` : "") +
   (this.gender ? ` - Gender: ${this.gender}` : "") +
   (this.size ? ` - Size: ${this.size}` : "")
  );
 }
}

class ProductBuilder {
 constructor() {
  this.product = new Product("", 0, "");
 }

 setName(name) {
  this.product.name = name;
  return this;
 }

 setPrice(price) {
  this.product.price = price;
  return this;
 }

 setCategory(category) {
  this.product.category = category;
  return this;
 }

 build() {
  const builtProduct = this.product;
  this.product = new Product("", 0, "");
  return builtProduct;
 }
}

class SmartphoneBuilder extends ProductBuilder {
 setBrand(brand) {
  this.product.brand = brand;
  return this;
 }

 setProcessor(processor) {
  this.product.processor = processor;
  return this;
 }

 setRAM(ram) {
  this.product.ram = ram;
  return this;
 }
}

class SmartHomeDeviceBuilder extends ProductBuilder {
 setFunctionality(functionality) {
  this.product.functionality = functionality;
  return this;
 }

 setConnectionType(connectionType) {
  this.product.connectionType = connectionType;
  return this;
 }
}

class WearableDeviceBuilder extends ProductBuilder {
 setCompatibility(compatibility) {
  this.product.compatibility = compatibility;
  return this;
 }

 setWearableType(wearableType) {
  this.product.wearableType = wearableType;
  return this;
 }
}

class Director {
 constructor(builder) {
  this.builder = builder;
 }
 setBuilder(builder) {
  this.builder = builder;
 }

 constructProduct(name, price, category) {
  return this.builder
   .setName(name)
   .setPrice(price)
   .setCategory(category)
   .build();
 }

 constructSmartphone(category, brand, processor, ram, price) {
  return this.builder
   .setName("Smartphone")
   .setCategory(category)
   .setBrand(brand)
   .setProcessor(processor)
   .setRAM(ram)
   .setPrice(price)
   .build();
 }

 constructSmartHomeDevice(category, functionality, connectionType, price) {
  return this.builder
   .setName("Smart Home Device")
   .setCategory(category)
   .setFunctionality(functionality)
   .setConnectionType(connectionType)
   .setPrice(price)
   .build();
 }

 constructWearableDevice(category, compatibility, wearableType, price) {
  return this.builder
   .setName("Wearable Device")
   .setCategory(category)
   .setCompatibility(compatibility)
   .setWearableType(wearableType)
   .setPrice(price)
   .build();
 }
}

const createData = () => {
 const smartphoneBuilder = new SmartphoneBuilder();
 const smartHomeDeviceBuilder = new SmartHomeDeviceBuilder();
 const wearableDeviceBuilder = new WearableDeviceBuilder();
 const director = new Director();

 director.setBuilder(smartphoneBuilder);
 const smartphone = director.constructSmartphone(
  "Mobile Devices",
  "Samsung",
  "Snapdragon",
  "8GB",
  "500$"
 );

 director.setBuilder(smartHomeDeviceBuilder);
 const smartHomeDevice = director.constructSmartHomeDevice(
  "Smart Home",
  "Smart Lighting",
  "Wi-Fi",
  "150$"
 );

 director.setBuilder(wearableDeviceBuilder);
 const wearableDevice = director.constructWearableDevice(
  "Wearable Tech",
  "iOS, Android",
  "Fitness Tracker",
  "100$"
 );

 const data = [smartphone, smartHomeDevice, wearableDevice];
 data.forEach((item) => {
  console.log(item.getInfo());
 });

 return data;
};

createData();
