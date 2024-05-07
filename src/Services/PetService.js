export default class Pet {
  constructor(name, age, species, owner, medicalHistory = []) {
    this.name = name;
    this.age = age;
    this.species = species;
    this.owner = owner;
    this.medicalHistory = medicalHistory;
    this.moodLevel = 3;
  } 

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getSpecies() {
    return this.species;
  }

  getOwner() {
    return this.owner;
  }

  getMedicalHistory() {
    return this.medicalHistory;
  }

  addMedicalHistory(record) {
    this.medicalHistory.push(record);
  }

  getMoodLevel() {
    return this.moodLevel;
  }

  updateMoodLevel(moodLevel) {
    
  }





  toString() {
    return `Name: ${this.name}\nAge: ${this.age}\nSpecies: ${this.species}\nOwner: ${this.owner}\nMedical History: ${this.medicalHistory.join(', ')}`;
  }
}

