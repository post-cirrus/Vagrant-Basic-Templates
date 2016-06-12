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

##### Logstash Docker info:
- Exposed ports :
	- udp => 9999 
	- tcp => 9998 
	- http => 9997 
- Config file 'logstash.conf'

## Start the Logging Server

Start the Logging Server (Elasticsearch, Kibana & Logstash :
```bash
vagrant up --no-parallel
```

After having bootstrapped the development environment you can check the result by opening a browser pointing to
- Kibana @ http://192.168.82.102:5601 or http://logger.cirrus.io:5601
- Elasticsearch @ http://192.168.82.102:9200 or http://logger.cirrus.io:9200
- Logstash @udp:9999 or @tcp:9998 or @http:9997 
```bash
telnet logger.cirrus.io 9999 or 9998 or 9997 # Test Logstash listing
wget http://logger.cirrus.io:9200 # Test Elasticsearch listing
wget http://192.168.82.102:5601 # Test Kibana listing
```

## Next step

Now you ready to start development, go to [Development Page](https://couldhardware.atlassian.net/wiki/display/DOC/Development).

## INFO: 
When starting one or more Docker Containers a vagrant box is booted to be used a the base OS for the Docker containers. This is done to ensure that the development environment meets the staging environment. You can connect to the vagrant box :         

```bash
vagrant ssh default
```


## Troubleshooting
Sometimes when you start the LogServer module, you might not be able to reach Kibana web page because you'll see the following message : "Elasticsearch is still initializing the kibana index" about the Elasticsearch plugin.
To fix it, simply log in your vagrant host delete .kibana file and restart the docker. On windows the procedure is :

```bash
D:\Vagrantfile-LogServer> vagrant ssh default
Last login: Wed May 25 22:18:24 2016 from gateway
[vagrant@loggingserver ~]$ curl -XDELETE http://localhost:9200/.kibana
{"acknowledged":true
}[vagrant@loggingserver ~]$ docker restart elasticsearch
elasticsearch
```
