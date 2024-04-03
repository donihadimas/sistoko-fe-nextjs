pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Stage') { 
            steps {
                sh 'npm install --legacy-peer-deps' 
            }
        }
        stage('Build Stage') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
    post { 
        success {
            script {
                def changeLog = currentBuild.changeSets.collect { entry ->
                    entry.collect { item ->
                        "- ${item.author.fullName} commit: \n ${item.msg} \n commit id: ${item.commitId}"
                    }
                }.flatten().join('\n')

                def successMessage = "Yaaayyy... Jenkins Pipeline Sistoko API Expressjs berhasil\n\n"
                successMessage += "Changes:\n${changeLog}"

                discordSend description: successMessage, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224922796170149920/QzqneRvYNSq7ROrzDv8mTgdVriT9MDHdW0-AumcNWSvhj2W2QOphGjnAnTNwb1RTK09N"
            }
        }
        failure {
            script {
                def changeLog = currentBuild.changeSets.collect { entry ->
                    entry.collect { item ->
                        "- ${item.author.fullName} commit: \n ${item.msg} \n commit id: ${item.commitId}"
                    }
                }.flatten().join('\n')

                def failureMessage = "Ooopss...  Pipeline Sistoko API Expressjs gagal\n\n"
                failureMessage += "Changes:\n${changeLog}"

                discordSend description: failureMessage, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224922796170149920/QzqneRvYNSq7ROrzDv8mTgdVriT9MDHdW0-AumcNWSvhj2W2QOphGjnAnTNwb1RTK09N"
            }
        }
    }
}
