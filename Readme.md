## commands

### Build the docker image
`docker image build . -t amithbrs/my_node_app:v2.0.0`

### Push the docker image which was build
`docker push amithbrs/my_node_app:v2.0.0`

### Create a k8s deployment with a name
`kubectl create deployment expressapp --image=amithbrs/my_node_app:v2.0.0 --replicas=3`

### Expose the deployment as type Loadbalancer
`kubectl expose deployment expressapp --port='3000' --target-port='3000' --type=LoadBalancer`

--port - Host port on which the service is exposed
--target-port - Port through which the services are listening internally

other types
- `--type=ClusterIP`
- `--type=NodePort`
- `--type=ExternalName`

### Get all the available k8s services
`kubectl get svc`

### If running the k8s on single node minikube, you can expose the service by tunneling with below command
`minikube service expressapp`
