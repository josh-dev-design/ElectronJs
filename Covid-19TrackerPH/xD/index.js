const { app, BrowserWindow, Menu, shell } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}


app.on('ready', () =>{
    createWindow()

    const menu = new Menu.buildFromTemplate([
        {
            label:"File",
            submenu:[

               {
                label: "API Source",
                click(){
                    shell.openExternal('https://endcov.ph/dashboard/')
                }
            },
                {type: 'separator'},
                {label: "Exit",
              
            click(){
                app.exit();
            }
        },
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
})

