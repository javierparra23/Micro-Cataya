FROM openjdk:8-jdk-alpine
MAINTAINER baeldung.com
COPY target/catayaback-0.0.1-SNAPSHOT.war service.war
ENTRYPOINT ["java","-jar","/service.war"]
