new Vue({
  el: "#vue-app",
  data: {
    name: "Shaun",
    job: "Ninja",
    website: "https://www.google.de",
    websiteTag: "<a href='https://www.google.de'>Google</a>",
    age: "25",
    x: "X",
    y: "Y",
    name: "",
    age: "",
    myAge: 20,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    sucess: false,
    characters: ["Mario","Luigi","Yoshi","Bowser"],
    ninjas: [
      {name: "Ryu", age: 25},
      {name: "Yoshi", age: 35},
      {name: "Ken", age: 55},
    ]
  },
    methods: {
      greet: function(time){
        return "Good " + time + " " + this.name;
      },
      add: function(value){
        return this.age += value;
      },
      substract: function(value){
        return this.age -= value;
      },
      updateXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
      },
      logName: function(){
        console.log("You entered your name");
      },
      logAge: function(){
        console.log("You antered you age");
      }
    },
    //computed properties are no functions, thats why
    //they are not called in the html with parantecies ()
    computed: {
      addToA: function(){
        console.log("a");
        return this.a + this.myAge;
      },
      addToB: function(){
        console.log("b");
        return this.b + this.myAge;
      },
      compClasses: function(){
        return {
          available: this.available,
          nearby: this.nearby
        }
      }
    }
});
