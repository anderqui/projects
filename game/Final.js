var game = new phaser.game(480,320,Phaser.CANVAS,null,
    {preload:preload,create:create,update:update
            
    });
           
    function preload() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically =true;
        game.stagebackgroundColor = '#ddd';
    }
           
    function create() {}
           
    function update() {}