# Vagrant template file for Module Dev Environment

This Vagrant file creates the necessary development environment for backend Modules development in Cirrus project.

Prerequist:
- Virtualbox 5.0.14 or latest
- Vagrant 1.8.1 or latest

To start Vagrant installation:
```
vagrant up
```

This Vagrant file will install :
```
- Centos 7.1 and run an update
- EPEL repository
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

Now login into the Vagrant:
```
vagrant ssh
```
Go to, to get started developing you first Cirrus Module:

[Create Module Development Structure](https://couldhardware.atlassian.net/wiki/plugins/createcontent/draft-createpage.action?draftId=9568283)
