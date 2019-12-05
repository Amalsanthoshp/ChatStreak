FROM python:3.7
MAINTAINER Amal Santhosh

ENV PYTHONUNBUFFERED 1

# create root directory for our project in the container
RUN mkdir /chatproject

# Set the working directory to /music_service
WORKDIR /chatproject

# Copy the current directory contents into the container at /music_service
ADD . /chatproject/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

CMD ["./run_app.sh"]

EXPOSE 8000
