var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!'
	  }
	})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var characterApp = new Vue({
  el: '#character-app',
  data: {
    charName: 'Gulliver Coalman',
    levelNumber: 1,
    notableSkill: 'Smithing'
  }
})