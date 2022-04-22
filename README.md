# AccentureChallenge-Client

## Description

XCompany wants to monitor the air quality index around the world. This code contains the web application and native mobile application built with angular ionic framework.

## Git branching strategy

Every feature get's its own branch. The format of the name of a branch is
> YYYYMMDD_NAME_FEATURE

## API

The APIs for development is available at [Backend Code](https://github.com/vinay-krishna9/AccentureChallenge-Server)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What are the softwares needed to be installed and how to install them?
You need to install angular, ionic and node.js softwares to run the fronted application

For web application:
[Node](https://nodejs.org/en/download/)
[Angular](https://angular.io/cli)
[Ionic](https://ionicframework.com/docs/intro/cli)

For native application:
[Android Studio](https://developer.android.com/studio)
[Capacitor](https://ionicframework.com/docs/developing/android)

### Initial Setup

After installing the softwares, run `npm install` to install the packages.

### Test

`ng test`

### Start web application

`ionic serve`

### Start native application

```
ng build
ionic capcitor copy android
ionic capcaitor run android
```

