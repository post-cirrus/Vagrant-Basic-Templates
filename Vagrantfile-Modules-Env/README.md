# Vagrant template file for Module Dev Environment

This Vagrant file creates the necessary development environment for backend Modules development in Cirrus project.

Prerequist:
- Virtualbox 5.0.14 or latest
- Vagrant 1.8.1 or latest

This files contains:
```
- Centos 7.1
- NodeJs
- NPM
- Git
```

This NPM modules are installed as global in the Dev environment:
```
- Winston@2.2.0
- Winston-elasticsearch@0.2.6
- ApiDoc@0.15.1
```

To start this Vagrant:
```
vagrant up
vagrant ssh

```
Follow the instructions to get started developing you first Cirrus Module:
```
https://couldhardware.atlassian.net/wiki/plugins/createcontent/draft-createpage.action?draftId=9568283
```
