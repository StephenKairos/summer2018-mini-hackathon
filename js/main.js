var characterApp = new Vue({
  el: '#character-app',
  data: {
    charName: 'Gulliver Coalman',
    levelNumber: 1,
    notableSkill: 'Smithing',
    profileAddress: 'res/img/gaston-profile.jpg',
    bodyStat: 1,
    mindStat: 3,
    soulStat: 1
  },
  computed: {
    agilityStat: function() {
      agility = (this.bodyStat + this.mindStat) / 2;
      return agility;
    },
    healthStat: function() {
      var health = (this.bodyStat + this.soulStat) / 2;
      return health;
    },
    willpowerStat: function() {
      var willpower = (this.soulStat + this.mindStat) / 2;
      return willpower;
    },
  }
})