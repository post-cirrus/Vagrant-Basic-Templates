# Vagrant template file for Module Dev Environment

This Vagrant file creates the necessary development environment for backend Modules development in Cirrus project.

Prerequist:
- Virtualbox 5.0.16 or latest
- Vagrant 1.8.1 or latest
- Vagrant plugin vbguest (vagrant-vbguest (0.11.0))


```
To sync folders : vagrant plugin install vagrant-gatling-rsync
```

```
To connect to the vagrant host : vagrant ssh <vm name as specified in the Vagrantfile in the config.vm.define>
```

Aditionally, an example of a development environment consisting of multiple containers is provided. To run it you have
to execute this command in the application root directory

```bash
$ vagrant up --no-parallel
```

After having bootstrapped the development environment either as a single or as multiple container mode, you can check the
result by opening a browser pointing to http://192.168.82.101

```bash
open http://192.168.82.101
```

Vagrant guest machine environment:
```
Network = 'config.vm.network "public_network", ip : "192.168.82.100"'
Hostname = 'config.vm.hostname = "vagrant-api-dev"'
Port Forward = 'config.vm.network "forwarded_port", guest: 80, host: 10080'
```

To start Vagrant installation:
```
vagrant plugin install vagrant-vbguest
vagrant up
```

This Vagrant file will install :
```
- CirrusOS (https://atlas.hashicorp.com/bubuplanet/boxes/cirrusos)
- EPEL repository
- NodeJs
- NPM
- Git
```

The guest machine Vagrant synced_folder will be created as :
```
/vagrant
```
On the host machine the synced_folder will be created in :
```
<path-in-host-machine>/Vagrantfile-Modules-Env
```

This NPM modules are installed as global in the Dev environment:
```
- Winston@2.2.0
- Winston-elasticsearch@0.2.6
- ApiDoc@0.15.1
```

Now login you can login in into your vagrant:
```
vagrant ssh
```

Now Go to [Create Development Structure](https://couldhardware.atlassian.net/wiki/display/DOC/Create+Development+Structure) and follow the instructions on how to setup your development structure.
