pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install dependencies') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Build App') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Run the app') {
            steps {
                sh 'npm start'
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}