# Vagrant template file for Module Dev Environment

This Vagrant file creates the necessary development environment for backend Modules development in Cirrus project.

### Prerequist:
- Virtualbox 5.0.16 or latest
- Vagrant 1.8.1 or latest
- Vagrant plugin vbguest (vagrant-vbguest (0.11.0))

### Vagrant Development Environment

##### This Vagrant file will install :
```
- CirrusOS (https://atlas.hashicorp.com/bubuplanet/boxes/cirrusos)
- EPEL repository
- NodeJs
- NPM
- Git
```

##### Vagrant guest machine environment:
```
Network = 'config.vm.network "public_network", ip : "192.168.82.100"'
Hostname = 'config.vm.hostname = "vagrant-api-dev"'
Port Forward = 'config.vm.network "forwarded_port", guest: 80, host: 10080'
```

##### Folders Info
Vagrant Gesut machine folder : 

```
/vagrant
```

Host machine (your laptop) folder :
```
{User directory}/Vagrantfile-Modules-Env/cirrus/module
```

### Start up the Vagrantfile

To start Vagrant installation:
```
vagrant plugin install vagrant-vbguest
vagrant up
```

Now login you can login in into your vagrant:
```
vagrant ssh
```

## List of Vagrant Module files
- Vagrantfile-CirrusDbQL : Vagrant file that has environment setup to run the CirrusDbQL API server

## Next Step

Now Go to [Create Development Structure](https://couldhardware.atlassian.net/wiki/display/DOC/Create+Development+Structure) and follow the instructions on how to setup your development structure.
