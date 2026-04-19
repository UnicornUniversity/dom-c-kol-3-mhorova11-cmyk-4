//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application. 
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
const maleFirstNames = ["Jakub", "Jan", "Tomáš", "Matyáš", "Adam", "Filip", "Vojtěch", "Lukáš", "Martin", "Matěj", "Ondřej", "Daniel", "David", "Dominik", "Antonín", "Michal", "Petr", "Štěpán", "Tobiáš", "Marek", "Samuel", "Jiří", "Václav", "Šimon", "Kryštof", "Jonáš", "Mikuláš", "Oliver", "Tadeáš", "Patrik", "Josef", "František", "Jáchym", "Pavel", "Viktor", "Sebastian", "Karel", "Eliáš", "Jaroslav", "Vít", "Matouš", "Teodor", "Richard", "Kristián", "Michael", "Eduard", "Sebastián", "Maxmilián", "Jindřich", "Vilém", "Alex", "Vítek", "Maxim", "Robin", "Max", "Nikolas", "Damián", "Albert", "Alexandr", "Miroslav", "Denis", "Milan", "Vincent", "Radek", "Ladislav", "Artur", "Erik", "Stanislav", "Tobias", "Zdeněk", "Roman", "Damian", "Hugo", "Vladimír", "Prokop", "Radim", "Oskar", "Vojta", "Robert", "Nicolas", "Mateo", "Gabriel", "Aleš", "Adrian", "Kristian", "Bartoloměj", "Hynek", "William", "Alfréd", "Mathias", "Rostislav", "Matteo", "Theodor", "Otakar", "Vítězslav", "Oldřich", "Simon", "Alan", "Boris", "Benjamin"];
const femaleFirstNames = ["Eliška", "Anna", "Adéla", "Tereza", "Sofie", "Viktorie", "Ema", "Karolína", "Natálie", "Amálie", "Julie", "Kristýna", "Barbora", "Nela", "Laura", "Klára", "Emma", "Anežka", "Rozálie", "Sára", "Marie", "Lucie", "Aneta", "Zuzana", "Mia", "Veronika", "Ella", "Alžběta", "Nikola", "Gabriela", "Kateřina", "Nikol", "Valerie", "Magdaléna", "Nina", "Liliana", "Ester", "Elena", "Josefína", "Adriana", "Markéta", "Štěpánka", "Stella", "Magdalena", "Stela", "Beáta", "Terezie", "Linda", "Jasmína", "Emily", "Vanesa", "Michaela", "Elen", "Antonie", "Emílie", "Dominika", "Denisa", "Agáta", "Johana", "Diana", "Lea", "Bára", "Rozárie", "Klaudie", "Justýna", "Mariana", "Izabela", "Jana", "Hana", "Monika", "Vendula", "Zoe", "Patricie", "Isabella", "Andrea", "Daniela", "Eva", "Simona", "Šárka", "Sofia", "Meda", "Lilien", "Vivien", "Sabina", "Elizabeth", "Alena", "Martina", "Nella", "Leontýna", "Ellen", "Evelína", "Kamila", "Lenka", "Malvína", "Victoria", "Valérie", "Karla", "Ela", "Adina", "Jolana", "Šarlota", "Vanessa", "Olivie", "Pavlína", "Sandra", "Johanka", "Františka", "Lily", "Petra", "Tamara", "Miriam", "Anastázie", "Alice", "Amélie", "Edita", "Helena", "Dorota", "Victorie", "Melisa", "Valentýna"];
const femaleSurnames = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pokorná", "Jelínková", "Hájková", "Králová", "Růžičková", "Benešová", "Fialová", "Sedláčková", "Šimková", "Kolářová", "Navrátilová", "Urbanová", "Blažková", "Krejčová", "Kratochvílová", "Křížová", "Bartošová", "Čechová", "Zemanová", "Konečná", "Malá", "Šťastná", "Holubová", "Tichá", "Valentová", "Musilová", "Kadlecová", "Soukupová", "Poláková", "Vondráčková", "Čermáková", "Kubíčková", "Hrušková", "Dušková", "Ševčíková", "Zelená", "Jandová", "Machová", "Lišková"];
const maleSurnames = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pokorný", "Jelínek", "Hájek", "Král", "Růžička", "Beneš", "Fiala", "Sedláček", "Šimek", "Kolář", "Navrátil", "Urban", "Blažek", "Krejčí", "Kratochvíl", "Kříž", "Bartoš", "Čech", "Zeman", "Konečný", "Malý", "Šťastný", "Holub", "Tichý", "Valenta", "Musil", "Kadlec", "Soukup", "Polák", "Vondráček", "Čermák", "Kubíček", "Hruška", "Dušek", "Ševčík", "Zelený", "Janda", "Mach", "Liška"];
const pohlavie = ["male", "female"];
const workload = [10, 20, 30, 40];


export function main(dtoIn) {
  const dtoOut = []

  function randomItem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }
  function randomBirthdate(){
    const today = new Date();
    let minDate= new Date ();
    minDate.setFullYear(today.getFullYear()- dtoIn.age.max);
    minDate.setDate(today.getDate() + 1);
    let maxDate= new Date();
    maxDate.setFullYear(today.getFullYear() - dtoIn.age.min);
    maxDate.setDate(today.getDate() - 1);
    return new Date(Math.floor(Math.random() * (maxDate.getTime() - minDate.getTime())) + minDate.getTime()).toISOString();
  }
  function generatePerson(){
    let gender= randomItem(pohlavie);
    if (gender === "male") {
      dtoOut.push(
          {gender: "male",
            name: randomItem(maleFirstNames),
            surname:randomItem(maleSurnames),
            workload:randomItem(workload),
            birthdate: randomBirthdate()})
    }else{
      dtoOut.push(
          {gender: "female",
            name: randomItem(femaleFirstNames),
            surname:randomItem(femaleSurnames),
            workload:randomItem(workload),
            birthdate: randomBirthdate()})
    }
  }
  function generateWorkers() {
    for (let i = 0; i < dtoIn['count']; i++) {
      generatePerson();
    }
    return dtoOut;
  }

  //let dtoOut = exMain(dtoIn);
  return generateWorkers();
}
