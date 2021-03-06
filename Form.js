class Form {

  constructor() {
    this.restart = createButton("Restart")
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-30, displayHeight/2-100);
    this.button.position(displayWidth/2-15, displayHeight/2);
    this.restart.position(displayWidth-150,30)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-50, displayHeight/2);
    });
    this.restart.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)  
      Player.updateCarsAtEnd(0);
    })

  }
}
