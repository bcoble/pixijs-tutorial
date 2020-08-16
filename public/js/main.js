
/**
 * Entry point
 */
main = function() {
    checkBrowserInit()

    configurePixi();
    
};

/**
 * Verifies some browser info
 */
checkBrowserInit = function() {
    console.log('Check browser settings');

    let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
        type = "canvas"
    }
    
    PIXI.utils.sayHello(type)    
};

/**
 * Configure pixi
 */
configurePixi = function() {
    console.log('Loading pixi...')
    let app = new PIXI.Application({
        width: 512, 
        height: 512
    });
    
    app.renderer.backgroundColor = 0x1488ba;
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    app.renderer.autoResize = true;
    app.renderer.resize(window.innerWidth, window.innerHeight);

    document.body.appendChild(app.view);
}


main();