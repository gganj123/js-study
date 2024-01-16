// 지시사항에 따라 코드를 작성합니다.
const myDog = {
    species: 'sig',
    age: 5,
    color: 'white',
    getSpecies: function () {
      return this.species;
    },
    getAge: function () {
      return this.age;
    },
    getColor: function () {
      return this.color;
    },
    changeSpecies: function (newspecies) {
      this.species = newspecies;
    },
    changeAge: function (newAge) {
      this.age = newAge;
    },
    changeColor: function (newcolor) {
      this.color = newcolor;
    },
  };
  
  // 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
  module.exports = { obj: myDog };
  