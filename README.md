# TGTHR
TGTHR brings people together in thousands of cities to do more of what they want to do in life. It is organized around one simple idea: when we get together and do the things that matter to us, we’re at our best. And that’s what TGTHR does. It helps people meet up, explore, teach and learn the things that help them come alive.


# About

This project was created using [React Native](https://facebook.github.io/react-native/) and [Firebase](https://firebase.google.com/) for UCR's CS180 Software Engineering class. It is a joint collaboration between [Ryan Yuzuki](https://github.com/ryuzu001), [Brandon Tran](https://github.com/regice), [Apollo Truong](https://github.com/apollotruong) and [Sabrina Wong](https://github.com/swong040)

# Video

(In progress)

# How it works
Quick and dirty breakdown on app layout: 
![](https://i.imgur.com/MnTEkzB.png)


# Difficulties and Challenges

Going into this project, nobody on our team knew the first thing about React Native or Firebase. We had a steep learning curve in order to get started and perform our first software demo within the two week time frame. Nevertheless, we managed to pull through and now can say at the end of the course that we have a fully functioning prototype.

One other difficulty was that originally we were coding for different platforms. Half our team was developing on Android, and the other half was developing on iOS. React Native claims to be "fully native" and "truly multiplatform". Yeah, no. Some things that displayed perfectly on one platform resulted in hours of errors and warnings when rendered on the other platform. Finally, at the advice of our TA, we decided to support only one platform for the time being and chose Android, simply for the multiplatform support.

# (Dev portion) Running on Expo

to run this, git clone/pull and cd into src/TGTHR and run the command `expo start` (Make sure you have expo installed. `npm install expo` or someat

make sure to have an android device emulator running or connected through ADB. (Or just connected to the same wifi network) With the Expo app installed, of course.

also `npm start --reset-cache` is helpful, especially if you run into problems (Directory exists but tells you it doesnt..etc)

Also sidenote, exporting as an APK would be helpful ...
