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
        sh '''
            docker rm -f express-hello-world || true
            docker run -d \
                --name express-hello-world \
                -p 3000:3000 \
                express-hello-world:latest
        ''' }
        }

    }
}