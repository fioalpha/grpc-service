const grpc = require('grpc');
const tasksProto = grpc.load('task.proto');

const tasks ={ id: 1, title: "Title", description: "Description"}

const IP = '165.232.147.56:50051'
// const IP = '127.0.0.1:50051'

const server = new grpc.Server();

server.addService(
    tasksProto.TaskService.service, {
        list: (_, callback) => {
            console.log(tasks)
            callback(null, tasks)
        },
        save: (task, callback) => {
            console.log(tasks)
            tasks.push(task.request)
            callback(null, tasks)
        }
    }
)

server.bind(IP, grpc.ServerCredentials.createInsecure())
console.log(`Server running at http://${IP}`)
server.start()