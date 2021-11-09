// Our data object
var data = { a: 1 }

// The object is added to a Vue instance
var vm = new Vue({
  data: data
})


// Getting the property on the instance returns the one from the original data
new Vue({
  el: '#data-objects-testing',
  data: {
      message: `is vue property "a" equal to its data attribute "a"? ${vm.a == data.a}`
  }
})

// Setting the property on the instance also affects the original data
vm.a = 2 // sets to 2
let vueObject = new Vue({
  el: '#data-objects-testing-2',
  data: data
})

// showcase incrementing value above using data object
new Vue({
  el: '#increment-a',
  methods: {
    incrementA: function () {
      data.a += 1;
    }
  }
});

// showcase freezing object to stop incrementing (doesnt work, freezing only stops members  being added!)
let vueFreeze = new Vue({
  el: '#freezer',
  data: {
    updateMessage: 'not updated yet'
  },
  methods: {
    // method bound to button to freeze data object when pressed
    freezeData: function() {
      Object.freeze(data);
    }
  },
  created: function() {
    this.updateMessage = 'hello there!';
  }
});
// create watcher to set update message on "a" value change
vueObject.$watch('a', function(newValue, oldValue) {
  vueFreeze.updateMessage = '"a" is now ' + data.a + ', updated at ' + new Date().toLocaleString()
})


