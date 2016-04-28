# Vagrant development environment for Cirrus Gui based on Docker files 

This Vagrant file creates a virtualbox using the CirrusOS, than depending on the type of webserver that has to be used a Docker container is started. All Docker containers expose the same directory "app/www" in the Guest machine. 

#### Prerequist:
- Virtualbox 5.0.16 or latest
- Vagrant 1.8.1 or latest
- Vagrant plugin vbguest (vagrant-vbguest (0.11.0))

Vagrant environment setup:
```
Vagrant Box = 'default.vm.box = "bubuplanet/cirrusos' (https://atlas.hashicorp.com/bubuplanet/boxes/cirrusos)
Network = 'default.vm.network "public_network", ip : "192.168.82.101"'
Hostname = 'default.vm.hostname = "webui-dev"'
Synced Folder = 'default.vm.synced_folder "app/www", "/var/www", create: true' 
```

If not already done install the vagrant vbguest plugin:
```bash
vagrant plugin install vagrant-vbguest
```

## Launch Docker Container(s)
More than one docker container can run in parallel. 

#### Starting Apache2 as a Docker container
For the Apache2 server a Dockerfile located at 'environment/docker/config/httpd/' is used to build the image and necessary actions to setup the environment

##### Apache2 Docker info:
- Exposed port '10180'
- Volume inside Docker '/usr/local/apache2/htdocs/'
- Exposed Volume '/var/www'

Start Apache 2 Server version 2.4 :
```bash
vagrant up apache2
```

After having bootstrapped the development environment you can check the result by opening a browser pointing to http://192.168.82.101:10180
```bash
open http://192.168.82.101:10180 or http://captive.portal.cirrus.io:10180
```

#### Strating NGINX as a Docker container
For the NGINX server a Dockerfile located at 'environment/docker/config/nginx/' is used to build the image and necessary actions to setup the environment

##### NGINX Docker info:
- Exposed port '10181'
- Volume inside Docker '/usr/share/nginx/html'
- Exposed Volume '/var/www'

Start the NGINX Server version 1.8.1 :
```bash
vagrant up nginx
```

After having bootstrapped the development environment you can check the result by opening a browser pointing to http://192.168.82.101:10181
```bash
open http://192.168.82.101:10181 or http://captive.portal.cirrus.io:10180
```

## Next step

Now you ready to start development, go to [Create Development Structure](https://couldhardware.atlassian.net/wiki/display/DOC/Create+Development+Structure) and follow the "Step-by-step guide required for WebUis" projects instructions on how to setup your development structure.


## INFO: 
When starting one or more Docker Containers a vagrant box is booted to be used a the base OS for the Docker containers. This is done to ensure that the development environment meets the staging environment. You can connect to the vagrant box :         

```bash
vagrant ssh default
```
