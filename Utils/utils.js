function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// DEBUG
function debugOption(gui, ass) {
    gui.add(ass.rotation, 'x').min(0).max(9);
    gui.add(ass.rotation, 'y').min(0).max(9);
    gui.add(ass.rotation, 'z').min(0).max(9);
    gui.add(ass.position, 'x').min(-40).max(40);
    gui.add(ass.position, 'y').min(-40).max(40);
    gui.add(ass.position, 'z').min(-40).max(40);
    return gui;
}

// DEBUG
function debugOption2(gui) {
    var params = {
        switch: false
    };
    gui.add(params, "switch").name("asset light");
    gui.open();
    return params;
}
export { fibonacci, sleep, debugOption, debugOption2 };