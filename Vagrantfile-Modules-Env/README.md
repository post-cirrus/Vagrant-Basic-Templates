# Vagrant template file for Module Dev Environment

This Vagrant file creates the necessary development environment for backend Modules development in Cirrus project.

Prerequist:
- Virtualbox 5.0.14 or latest
- Vagrant 1.8.1 or latest


Vagrant guest machine environment:
```
Synced Folder = 'config.vm.synced_folder "cirrus/module/", "/home/module/", create: true, owner: "root", group: "root"'
Network = 'config.vm.network "public_network", ip : "192.168.82.100"'
Hostname = 'config.vm.hostname = "vagrant-api-dev"'
Port Forward = 'config.vm.network "forwarded_port", guest: 80, host: 10080'
```

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
[vagrant@vagrant-api-dev ~]$ cd /home/module
[vagrant@vagrant-api-dev ~]$ npm init (Will create the package.json)
```

This Vagrant file will create relative path to make them accessible form the host machine

The guest machine Vagrant synced_folder will be created as :
```
/home/modlue
```
On the host machine the synced_folder will be created in :
```
<path-in-host-machine>/Vagrantfile-Modules-Env/cirrus/module
```


Now Go to [Create Module Development Structure](https://couldhardware.atlassian.net/wiki/plugins/createcontent/draft-createpage.action?draftId=9568283) and follow the instructions on how to setup your development space
