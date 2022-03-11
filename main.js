Game.registerMod("autoclgh", {
  init: function() {
    this.acOn = false;
    l('products').insertAdjacentHTML('afterbegin', '<div class="storePre"><div id="autoClicker" onclick="PlaySound(\'snd/tick.mp3\');" class="storePreButton">AutoClicker</div><p></p><label for="autospeed" style="opacity:0.5;">Speed: </label><input id="acspeed" name="autospeed" type="text" style="text-align:center;width:60px;background:none;border:0;color:white;opacity:0.5;outline:none;background-color:rgba(0, 0, 0, 0);" value="10"></div>');
    this.updateAc();

    let MOD = this;
    AddEvent(l('autoClicker'), 'click', function() {
      if (MOD.acOn == true) {
        MOD.acOn = false;
      } else {
        MOD.acOn = true;
      }
      MOD.autoClick();
      MOD.updateAc();
    });
  },

  updateAc: function() {
    if (this.acOn == true) {
      l('autoClicker').classList.add('selected');
    } else {
      l('autoClicker').classList.remove('selected');
    }
    l('acspeed').value = this.speed;
  },

  autoClick: function() {
    this.speed = l('acspeed').value;
    this.delay = 1000/ this.speed;
    if (this.acOn == true) {
      this.clickk = setInterval(function() {
        Game.ClickCookie();
      }, this.delay);
    } else {
      clearInterval(this.clickk);
    }
  },

  save: function(){
    return String(this.speed);
  },

  load: function(str){
    this.speed=parseInt(str||0);
		this.updateAc();
  }
});
