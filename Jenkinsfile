pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Stage') { 
            steps {
                sh 'npm install --force' 
            }
        }
        stage('Build Stage') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
}
