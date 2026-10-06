pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t express-hello-world:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm express-hello-world:latest npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage will be configured next.'
            }
        }
    }
}