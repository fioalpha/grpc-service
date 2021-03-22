
const grpc = require('grpc')
const PROTO_PATH = './task.proto'
const NoteService = grpc.load(PROTO_PATH).TaskService

// const IP = '165.232.147.56'
const IP = '127.0.0.1'

const client = new NoteService(`${IP}:50051`, grpc.credentials.createInsecure())
    
module.exports = client