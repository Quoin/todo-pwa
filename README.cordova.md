# Cordova part of the project

## Installation and initialization

Preparing the environment (on Mac):

    $ npm i -g cordova ios-deploy
    $ brew install rbenv
    $ rbenv init
    $ eval "$(rbenv init -)"
    $ rbenv install 2.6.5
    $ rbenv shell 2.6.5
    $ gem install cocoapods

Creating the new project

    $ cordova create src/cordova com.quoininc.todo.pwa TodoPWA
    $ cd src/cordova/

    $ cordova platform add ios --save
    $ cordova platform ls

    $ cordova plugin add cordova-plugin-device --save
    $ cordova plugin add phonegap-plugin-push --save

    $ cordova requirements

If needed, get Android Studio: https://developer.android.com/studio/

After installation, install android versions 8+:

- Appearance & Behavior
    - System Settings
        - Android SDK


    sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
    brew install gradle
