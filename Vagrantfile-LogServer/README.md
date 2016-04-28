# Vagrantfile for Logging environment
This Vagrant file creates a virtualbox using the CirrusOS, and will create the Logging environment required when develloping Cirrus applications. 

#### Prerequist:
- Virtualbox 5.0.16 or latest
- Vagrant 1.8.1 or latest
- Vagrant plugin vbguest (vagrant-vbguest (0.11.0))

Vagrant environment setup:
```
Vagrant Box = 'default.vm.box = "bubuplanet/cirrusos' (https://atlas.hashicorp.com/bubuplanet/boxes/cirrusos)
Network = 'default.vm.network "public_network", ip : "192.168.82.103"'
Hostname = 'default.vm.hostname = "loggingserver"'
Synced Folder = 'default.vm.synced_folder ".", "/vagrant", create: true' # will be used to store the elasticsearch data
```

If not already done install the vagrant vbguest plugin:
```bash
vagrant plugin install vagrant-vbguest
```

## Launch Docker Container(s)
More than one docker container can run in parallel. 

#### Starting Ealsticsearch and Kibana as a Docker container
For the Elasticsearch server a Dockerfile located at 'environment/docker/config/elk/' is used to build the image
For the Kibana server a Dockerfile located at 'environment/docker/config/kibana/' is used to build the image

##### Elastisearch Docker info:
- Exposed port 9200, 9300
- Volume inside Docker '/usr/share/elasticsearch/data/'
- Exposed Volume '/elasticsearch'

##### Kibana Docker info:
- Exposed port 5601

Start Elasticsearch and Kibaana :
```bash
vagrant up --no-parallel
```

After having bootstrapped the development environment you can check the result by opening a browser pointing to
- Kibana @ http://192.168.82.102:5601 or http://logger.cirrus.io:5601
- Elasticsearch @ http://192.168.82.102:9200 or http://logger.cirrus.io:9200
```bash
ex: open http://192.168.82.102:5601
```

#### Strating Logstash as a Docker container
For the Logstash a Dockerfile located at 'environment/docker/config/logstash/' is used to build the image, at stratup logstash will load the 'logstash.conf' file.

##### Logstash Docker info:
- Exposed port '31311'
- Config file 'logstash.conf'

Start the Logstash  :
```bash
vagrant up logstash
```

After having bootstrapped the development environment you can check the result by opening a browser pointing to http://logger.cirrus.io:31311 or http://192.168.82.102:31311
```bash
telnet logger.cirrus.io 31311
```

## Next step

Now you ready to start development, go to [Development Page](https://couldhardware.atlassian.net/wiki/display/DOC/Development) and follow the "Step-by-step guide" your require for your project.


## INFO: 
When starting one or more Docker Containers a vagrant box is booted to be used a the base OS for the Docker containers. This is done to ensure that the development environment meets the staging environment. You can connect to the vagrant box :         

```bash
vagrant ssh default
```
