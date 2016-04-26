Basic environment for Mongodb development
This vagrantfile will bring up :
- cirrusos as vm box
- MongoDb (mongo:latest)
- mongo-express (mongo-express:latest)

1/ Edit your hosts file and add (at least) the db.cirrus.io entry

2/ Launch the vagrant file
Warning - you have to run it with the --no-parallel option :

bash> vagrant up --no-parallel

3/ Access your environment

Mongodb : db.cirrus.io:27017
Admin gui : http://db.cirrus.io:8081

MongoDB data folder is mapped to this root folder