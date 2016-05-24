# Basic environment for Mongodb development

This vagrantfile will bring up :
- cirrusos as vm box
- MongoDb docker (mongo:3.2.5)
- mongo-express docker (mongo-express:0.30.52)

## Setup and startup

1/ Edit your hosts file and add (at least) the db.cirrus.io entry :

```
192.168.82.104 db.cirrus.io
```

2/ Launch the vagrant file

Warning - you have to run it with the --no-parallel option :
```
vagrant up --no-parallel
```

3/ Access your environment

```
Mongodb : db.cirrus.io:27017
Admin gui : http://db.cirrus.io:8081
```

MongoDB data folder is mapped to this folder



## TODO

on base box

sudo yum install epel-release
sudo yum install syslog-ng
=> config mongo docker logs to syslog-ng
=> forward syslog-ng to logstash
